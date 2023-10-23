import React, { useState } from "react";
import { View, Button } from "react-native";
import auth from "../firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
        } catch (error) {
            console.error(error);
        }
    };

    const logInWithEmail = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <TextInput placeholder='Email' onChangeText={setEmail} />
            <TextInput placeholder='Password' onChangeText={setPassword} secureTextEntry={true} />
            <Button title='Login with Email' onPress={logInWithEmail} />
            <Button title='Login with Google' onPress={logInWithGoogle} />
        </View>
    );
}
