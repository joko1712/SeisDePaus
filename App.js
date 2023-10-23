import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BottomTabNavigator from "./BottomTabNavigator";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import UploadDeck from "./screens/UploadDeck";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/uploaddeck' element={<UploadDeck />} />
            </Routes>
            <BottomTabNavigator />
        </Router>
    );
}

export default App;
