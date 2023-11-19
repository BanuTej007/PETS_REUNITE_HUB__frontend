// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgnMG_cilMknhfOgBaj5J4lYFufKn5VcI",
  authDomain: "pets-reunite-hub-9a651.firebaseapp.com",
  projectId: "pets-reunite-hub-9a651",
  storageBucket: "pets-reunite-hub-9a651.appspot.com",
  messagingSenderId: "85602121056",
  appId: "1:85602121056:web:8bfdcb1cdc7db572201a05",
  measurementId: "G-M1QK9ZF83Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };