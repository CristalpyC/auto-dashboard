// Import the functions you need from the SDKs you need
import { User } from "@/interfaces/user";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGfDAx2y3TtTV26FwdsXARMcUBErZc5p8",
  authDomain: "auto-dashboard-e325a.firebaseapp.com",
  projectId: "auto-dashboard-e325a",
  storageBucket: "auto-dashboard-e325a.appspot.com",
  messagingSenderId: "508294334496",
  appId: "1:508294334496:web:80d402f28c192df3ed1445"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ----- LOGIN AND REGISTER FUNCIONS -----
// Sign in with email y password
export const signIn = async (values: User) => {
    await signInWithEmailAndPassword(auth, values.email, values.password);
}

// Register user
export const registerUser = async (values: User) => {
  await createUserWithEmailAndPassword(auth, values.email, values.password);
}
