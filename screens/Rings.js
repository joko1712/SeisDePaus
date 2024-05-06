import React, { useState, useEffect, useContext } from "react";
import { Image, View, TouchableOpacity, StyleSheet, Text, Button } from "react-native";
import { AuthContext } from "../AuthContext";

export default function Rings() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const [kingCount, setKingCount] = useState(0);

    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        async function fetchDeck() {
            if (user) {
                // Fetch from firebase
                console.log("Fetching from firebase", user.displayName);
            } else {
                const fetchedImages = await fetchDeckOfCards();
                setImages(fetchedImages);
                setLoading(true);
            }
        }

        fetchDeck();
    }, []);

    useEffect(() => {
        if (loading) {
            const showImages = () => {
                setCurrentIndex((prevIndex) => {
                    if (prevIndex === images.length - 1) {
                        setLoading(false);
                        clearInterval(intervalId);
                        return 0;
                    }
                    return prevIndex + 1;
                });
            };

            const id = setInterval(showImages, 100);
            setIntervalId(id);

            return () => clearInterval(id);
        }
    }, [loading, images]);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
                <View style={styles.hidden}>
                    <Image source={{ uri: images[currentIndex] }} style={styles.image} />
                </View>
            </View>
        );
    }

    const handlePress = () => {
        if (
            images[currentIndex] === "https://deckofcardsapi.com/static/img/KH.png" ||
            images[currentIndex] === "https://deckofcardsapi.com/static/img/KD.png" ||
            images[currentIndex] === "https://deckofcardsapi.com/static/img/KS.png" ||
            images[currentIndex] === "https://deckofcardsapi.com/static/img/KC.png"
        ) {
            setKingCount(kingCount + 1);
        }
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleReset = () => {
        // Shuffle the images
        const shuffledImages = images.sort(() => Math.random() - 0.5);
        // Set the images
        setImages(shuffledImages);

        // Reset the current index to 0
        setCurrentIndex(0);
        setKingCount(0);
    };

    if (currentIndex === images.length - 1) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>RINGS OF FIRE</Text>
                <Text>
                    {currentIndex}/{images.length}
                </Text>
                <TouchableOpacity style={styles.imageContainer}>
                    <Image source={{ uri: images[currentIndex] }} style={styles.image} />
                    <Text style={styles.textOverImage}>Reset</Text>
                </TouchableOpacity>
                <Button title='Reset' onPress={handleReset} />
            </View>
        );
    }

    if (images[currentIndex] === "https://deckofcardsapi.com/static/img/back.png") {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>RINGS OF FIRE</Text>
                <Text>
                    {currentIndex}/{images.length}
                </Text>
                <TouchableOpacity style={styles.imageContainer} onPress={handlePress}>
                    <Image source={{ uri: images[currentIndex] }} style={styles.image} />
                    <Text style={styles.textOverImage}>Partiu!!!!!!</Text>
                </TouchableOpacity>
                <Text>King Count: {kingCount}</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>RINGS OF FIRE</Text>
                <Text>
                    {currentIndex}/{images.length}
                </Text>
                <TouchableOpacity onPress={handlePress}>
                    <Image source={{ uri: images[currentIndex] }} style={styles.image} />
                </TouchableOpacity>
                <Text>King Count: {kingCount}</Text>
            </View>
        );
    }
}

async function fetchDeckOfCards() {
    const response = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52");
    const data = await response.json();

    let cardImages = data.cards.map((card) => card.image);

    const additionalCardUrl = "https://deckofcardsapi.com/static/img/back.png";
    cardImages.push(additionalCardUrl);

    cardImages = cardImages.sort(() => Math.random() - 0.5);

    return cardImages;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 60,
    },
    imageContainer: {
        position: "relative",
    },
    image: {
        width: 400,
        height: 600,
        resizeMode: "contain",
    },
    textOverImage: {
        position: "absolute",
        top: 200,
        left: 0,
        right: 0,
        bottom: 0,
        color: "red",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
    },
    Text: {
        fontSize: 40,
    },
    title: {
        fontSize: 30,
    },
});
