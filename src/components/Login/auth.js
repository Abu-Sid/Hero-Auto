import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth;

export const userSignOut = () => {
    return auth()
    .signOut()
    .then(() => true)
    .catch(err => false);
};
