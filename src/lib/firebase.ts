// Import the functions you need from the SDKs you need
import { User } from "@/interfaces/user";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
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
const db = getFirestore(app);

// ----- LOGIN AND REGISTER FUNCIONS -----
// Sign in with email y password
export const signIn = async (values: User) => {
    await signInWithEmailAndPassword(auth, values.email, values.password);
}

// Password recovering
export const passwedRecover = async (values: { email: string} ) => {
  const res = await sendPasswordResetEmail(auth, values.email);
  console.log(res)
}

// Register user
export const registerUser = async (values: User) => {
  await createUserWithEmailAndPassword(auth, values.email, values.password);
}

// -------DOCUMENT-------
// Add document in a collection
export const addDocument = (path: string, data: any) => {
  data.createdAt = serverTimestamp();
  return addDoc(collection(db, path), data);
}