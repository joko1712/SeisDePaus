import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator"; // Import the BottomTabNavigator

export default function MainApp() {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
}
