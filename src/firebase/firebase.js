//Do not store config on the client side
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI-kRSukA8qB7M7fGlqDLCfDwaU8c0VRY",
  authDomain: "simple-firebase-a8169.firebaseapp.com",
  projectId: "simple-firebase-a8169",
  storageBucket: "simple-firebase-a8169.firebasestorage.app",
  messagingSenderId: "656852003639",
  appId: "1:656852003639:web:3ec062917f2d78e636c8b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;