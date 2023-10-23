import React, { useState } from "react";
import { View, Button } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
    webClientId: "43710051350-vsqobuj18cnbf7s3optlnltvbrptd13e.apps.googleusercontent.com",
});

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const signInWithGoogle = async () => {
        try {
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.error(error);
        }
    };

    const registerWithEmail = async () => {
        if (password === confirmPassword) {
            try {
                await auth().createUserWithEmailAndPassword(email, password);
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("Passwords don't match!");
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
            <Button title='Register with Google' onPress={signInWithGoogle} />
        </View>
    );
}
