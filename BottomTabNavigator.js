import React from "react";
import { Link } from "react-router-dom";
import { View, Button } from "react-native";

function BottomTabNavigator() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
            <Link to='/'>
                <Button title='Home' />
            </Link>
            <Link to='/rings'>
                <Button title='Rings' />
            </Link>
            <Link to='/login'>
                <Button title='Login' />
            </Link>
            <Link to='/register'>
                <Button title='Register' />
            </Link>
            <Link to='/uploaddeck'>
                <Button title='Upload Deck' />
            </Link>
        </View>
    );
}

export default BottomTabNavigator;
