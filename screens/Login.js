import React, { useState } from "react";
import { View, Button } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
    webClientId: "43710051350-vsqobuj18cnbf7s3optlnltvbrptd13e.apps.googleusercontent.com",
});

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInWithGoogle = async () => {
        try {
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.error(error);
        }
    };

    const loginUserWithEmail = async () => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <TextInput placeholder='Email' onChangeText={setEmail} />
            <TextInput placeholder='Password' onChangeText={setPassword} secureTextEntry={true} />
            <Button title='Login with Email' onPress={loginUserWithEmail} />
            <Button title='Login with Google' onPress={signInWithGoogle} />
        </View>
    );
}
