import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth"
import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import GoogleIcon from "../images/icons/google.png"
import { Container } from 'react-bootstrap';
import { UserContext } from '../App';
import firebaseConfig from '../firebase-config';


const LoginPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log("logged in user", loggedInUser);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });
    }
    const signOut = () => {
        firebase.auth().signOut().then(res => {
            setLoggedInUser({})
            console.log("logged out");
            sessionStorage.removeItem("token")
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <Container>
                <div className="row pt-5">
                    <div className="col-md-5 mt-5 offset-md-3">
                        <div className="p-5 login-container">
                            <h3 className="text-center mb-3 mt-5">
                                Login With
                            </h3>
                            <button onClick={handleGoogleSignIn} className="btn custom-auth-btn btn-block py-3 mb-3">
                                <img src={GoogleIcon} alt="" />
                                Continue with Google
                            </button>
                            <p className="text-center mb-5">
                                Don't have an account?{" "}
                                <a href="/login">Create an account</a>
                            </p>
                            <button onClick={signOut} className="btn btn-danger">Sign out</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default LoginPage;