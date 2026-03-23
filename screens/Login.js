import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import { auth } from "../firebaseConfig";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error(error);
        }
    };

    const logInWithEmail = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <TextInput placeholder='Email' onChangeText={setEmail} />
            <TextInput placeholder='Password' onChangeText={setPassword} secureTextEntry={true} />
            <Button title='Login with Email' onPress={() => logInWithEmail(email, password)} />
            <Button title='Login with Google' onPress={logInWithGoogle} />
        </View>
    );
}
