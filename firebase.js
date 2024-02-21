
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvH4FcnGy7LUmsFlj3Nk8ralQ57NZI_lg",
  authDomain: "automotive-bd.firebaseapp.com",
  projectId: "automotive-bd",
  storageBucket: "automotive-bd.appspot.com",
  messagingSenderId: "707567128382",
  appId: "1:707567128382:web:092fb1cc1eeb8e891ee66f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)