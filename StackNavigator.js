import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import App from "./App";
import Login from "./Login";
import Register from "./Register";
import UploadDeck from "./UploadDeck";
import Header from "./Header";

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                header: (props) => <Header {...props} />,
            }}>
            <Stack.Screen name='Home' component={App} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='UploadDeck' component={UploadDeck} />
        </Stack.Navigator>
    );
}
