import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AuthRoute from "./components/AuthRoute";
import { config } from "./config/config";

initializeApp(config.firebaseConfig);

type Props = {};

const App = (props: Props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AuthRoute>
                            <Home />
                        </AuthRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
