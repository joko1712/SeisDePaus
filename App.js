import React from "react";
import MainApp from "./MainApp";
import { AuthProvider } from "./AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <MainApp />
        </AuthProvider>
    );
}
