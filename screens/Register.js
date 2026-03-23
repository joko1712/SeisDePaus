import React, { useState } from "react";
import { View, Button, TextInput, Text } from "react-native";
import { auth } from "../firebaseConfig";
import {
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const registerWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error(error);
        }
    };

    const registerWithEmail = async (email, password) => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <TextInput placeholder='Email' onChangeText={setEmail} />
            <TextInput placeholder='Password' onChangeText={setPassword} secureTextEntry={true} />
            <TextInput
                placeholder='Confirm Password'
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
            />
            {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
            <Button title='Register with Email' onPress={() => registerWithEmail(email, password)} />
            <Button title='Register with Google' onPress={registerWithGoogle} />
        </View>
    );
}
