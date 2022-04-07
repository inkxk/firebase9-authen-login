import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type Props = {
    children: any
};

const AuthRoute = ({ children }: Props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AuthCheck();
        return () => AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoading(false);
        } else {
            console.log("unauthorized");
            navigate("/login");
        }
    });

    if (loading) return <p>loading ...</p>;

    return <>{children}</>;
};

export default AuthRoute;