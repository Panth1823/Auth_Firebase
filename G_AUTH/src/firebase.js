import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzdhvcANtS0lWuxXZ0Ln_zth9IrmrbfR8",
  authDomain: "auth-f74cf.firebaseapp.com",
  projectId: "auth-f74cf",
  storageBucket: "auth-f74cf.appspot.com",
  messagingSenderId: "214894913619",
  appId: "1:214894913619:web:d5b29fbb38f73db11dbea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);