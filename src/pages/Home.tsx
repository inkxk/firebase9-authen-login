import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth);
        navigate("login");
    };

    return (
        <div>
            <p>Home Page (Protected by Firebase!)</p>
            <button onClick={handleSignOut}>Sign out of Firebase</button>
        </div>
    );
};

export default Home;
