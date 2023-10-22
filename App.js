import React, { useState, useEffect } from "react";
import { Image, View, TouchableOpacity, StyleSheet, Text, Button } from "react-native";

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDeck() {
            const fetchedImages = await fetchDeckOfCards();
            setImages(fetchedImages);
            setLoading(false);
        }

        fetchDeck();
    }, []);

    const handlePress = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleReset = () => {
        setCurrentIndex(0);
    };

    if (images[currentIndex] === "https://deckofcardsapi.com/static/img/6C.png") {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image source={{ uri: images[currentIndex] }} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleReset}>
                    <Text style={styles.Text}>Seis de Paus</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={handlePress}>
                    <Image source={{ uri: images[currentIndex] }} style={styles.image} />
                </TouchableOpacity>
            </View>
        );
    }
}

async function fetchDeckOfCards() {
    const response = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52");
    const data = await response.json();

    return data.cards.map((card) => card.image);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 400,
        height: 600,
        resizeMode: "contain",
    },
    Text: {
        fontSize: 40,
    },
});
