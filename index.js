import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

export default function MainApp() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}
