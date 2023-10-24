import React from "react";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./AuthContext";

function MainApp() {
    return (
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    );
}

export default MainApp;
