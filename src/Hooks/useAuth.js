import React, { useState, useContext, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import PageSpinner from "../Components/PageSpinner";
import fireApp from "../Firebase/fire-app";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        fireApp.auth().onAuthStateChanged((usr) => {
            if (usr) {
                const { displayName, email, photoURL } = usr;
                const { uid } = usr.providerData[0];
                const signedInUser = { name: displayName, email, photo: photoURL, uid };
                setCurrentUser(signedInUser);
            }
            setPending(false);

        });

    }, []);
    if (pending) {
        return <><PageSpinner /></>;
    }
    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
export const PrivateRoute = ({ children, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (currentUser) ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    )
            }
        />
    );
};
export const useAuth = () => useContext(AuthContext);
