// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcO94_zLWSmQd7rueOZCu401nz3-zTbAM",
  authDomain: "yarees-05.firebaseapp.com",
  projectId: "yarees-05",
  storageBucket: "yarees-05.firebasestorage.app",
  messagingSenderId: "319243664400",
  appId: "1:319243664400:web:40b8091ec5fc2908029e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)