// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import  {getFirestore}  from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa6enNkegWn1p1yAgBB3mLDawnUMSLYjA",
  authDomain: "blog-app-8a463.firebaseapp.com",
  projectId: "blog-app-8a463",
  storageBucket: "blog-app-8a463.appspot.com",
  messagingSenderId: "366700159956",
  appId: "1:366700159956:web:144cb7d7d99a87bed52c41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()