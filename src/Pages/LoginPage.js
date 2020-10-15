import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth"
import { useHistory, useLocation } from 'react-router-dom';
import GoogleIcon from "../images/icons/google.png"
import { Container } from 'react-bootstrap';
import { LogoBrand } from '../images';


const LoginPage = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            alert(errorMessage);
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
            sessionStorage.removeItem("token")
        }).catch(err => {
            alert(err);
        })
    }
    return (
        <div>
            <Container>
                <div className="row pt-5">
                    <div className="col-md-6 mt-5 offset-md-3  text-center">
                        <a href="/">
                            <img src={LogoBrand} className="logo-brand mb-5" alt="brand" />
                        </a>
                        <div className="p-5 login-container">

                            <h3 className="text-center mb-3 mt-5">
                                Login With
                            </h3>
                            <button onClick={handleGoogleSignIn} className="btn custom-auth-btn btn-block py-3 mb-3 mt-3">
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