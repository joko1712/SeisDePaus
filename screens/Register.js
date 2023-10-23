import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";

import { GoogleAuthProvider } from "firebase/auth";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
        } catch (error) {
            console.error(error);
        }
    };

    const registerWithEmail = async (email, password) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
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

            <Button title='Register with Email' onPress={registerWithEmail} />
            <Button title='Register with Google' onPress={registerWithGoogle} />
        </View>
    );
}
