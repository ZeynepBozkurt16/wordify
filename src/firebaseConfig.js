// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDzqL8F3aFcWAewPUBRVG0MijwBSAjpayI",
    authDomain: "my-auth-app-98fc2.firebaseapp.com",
    projectId: "my-auth-app-98fc2",
    storageBucket: "my-auth-app-98fc2.appspot.com",
    messagingSenderId: "849848450553",
    appId: "1:849848450553:web:438674dd04521846c15128",
    measurementId: "G-DLM519D9FE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { db, auth };
