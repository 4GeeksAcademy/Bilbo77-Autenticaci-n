import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const { store } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!store.isLogin) {
            navigate('/home');
        }
    }, [store.isLogin, navigate]);

    const h1Style = {
        fontSize: "2.5rem",
        fontWeight: "bold",
        background: "linear-gradient(90deg, #ff8a00, #e52e71, #9b0ab9)",
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "gradientAnimation 5s ease infinite, blinkAnimation 1.5s step-start infinite"
    };

    return (
        <div className="container">
            {store.isLogin ? (
                <div className="text-center">
                    <h1 style={h1Style}>Sesión iniciada. Página accesible solo para usuarios</h1>
                    <img src="https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif" alt="Welcome GIF" style={{ marginTop: "20px" }} />
                </div>
            ) : (
                <div>
                    <h1 style={h1Style}>No tienes acceso</h1>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
