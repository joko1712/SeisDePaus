import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import UploadDeck from "./screens/UploadDeck";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='Register' component={Register} />
            <Tab.Screen name='UploadDeck' component={UploadDeck} />
        </Tab.Navigator>
    );
}
