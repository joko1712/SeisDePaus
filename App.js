import React from "react";
import Navbar from "./Navbar";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import UploadDeck from "./screens/UploadDeck";
import Rings from "./screens/Rings";
import { Route, Routes } from "react-router-dom";
import BottomTabNavigator from "./BottomTabNavigator";
import { StyleSheet } from "react-native";

function App() {
    return (
        <div style={styles.container}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/rings' element={<Rings />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/uploaddeck' element={<UploadDeck />} />
            </Routes>
            <BottomTabNavigator />
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 60,
    },
});

export default App;
