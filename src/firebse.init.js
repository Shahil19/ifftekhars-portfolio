// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9uxiRRdqOvE7GQrlkw1FSPBIJ1x7q9cA",
    authDomain: "ifftekhars-portfolio.firebaseapp.com",
    projectId: "ifftekhars-portfolio",
    storageBucket: "ifftekhars-portfolio.appspot.com",
    messagingSenderId: "708500597553",
    appId: "1:708500597553:web:32b2f34c4b00cb65efde10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;