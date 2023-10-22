import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CustomHeader() {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <Button title='Home' onPress={() => navigation.navigate("Home")} />
            <Button title='Login' onPress={() => navigation.navigate("Login")} />
            <Button title='Register' onPress={() => navigation.navigate("Register")} />
            <Button title='UploadDeck' onPress={() => navigation.navigate("UploadDeck")} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
        backgroundColor: "#ddd",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },
});
