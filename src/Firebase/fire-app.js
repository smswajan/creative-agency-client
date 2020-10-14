import * as firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from "../firebase-config";

const fireApp = firebase.initializeApp(firebaseConfig);

export default fireApp;
