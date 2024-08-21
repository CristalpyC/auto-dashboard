// Firebase functions
// Import the functions you need from the SDKs you need
import { User } from "@/interfaces/user";
import { getApp, getApps, initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadString } from 'firebase/storage';
import { GetServerSideProps } from "next";
import { NextRequest, NextResponse } from "next/server";
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
const storage = getStorage(app);

export async function middleware(req: NextRequest) {
  const auth = getAuth(app);
  const user = auth.currentUser;
  
  // Verifica si el usuario está autenticado
  if (!user) {
    // Redirige a la página de login si no hay usuario autenticado
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Si el usuario está autenticado, permite el acceso a la página
  return NextResponse.next();
}


// ----- LOGIN AND REGISTER FUNCIONS -----
// Sign in with email y password
export const signIn = async (values: User) => {
    const res = await signInWithEmailAndPassword(auth, values.email, values.password);
    //res.user.uid
    return res.user
}

// Password recovering
export const passwedRecover = async (values: { email: string} ) => {
  await sendPasswordResetEmail(auth, values.email);
}

// Register user
export const registerUser = async (values: User) => {
  const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
  const user = userCredential.user;

  //update profile, to include the user name
  await updateProfile(user, {
    displayName: values.name
  });
}

// -------DOCUMENT-------
// Add document in a collection
export const addDocument = (path: string, data: any) => {
  data.createdAt = serverTimestamp();
  return addDoc(collection(db, path), data);
}

// Set a document in a collection
export const setDocument = (path: string, data: any) => {
  data.createdAt = serverTimestamp();
  return setDoc(doc(db, path), data);
}

export const getDocuments = async (path: string) => {
  const dbQuery = query(
    collection(db, path),
    orderBy("createdAt", "desc")
  )
  // Obtener la referencia de la colección usando la ruta
  const querySnapshot = await getDocs(dbQuery);

  // Mapear los datos e incluir los UIDs de los documentos
  const documents = querySnapshot.docs.map(doc => ({
    id: doc.id, // product id
    ...doc.data() // data
  }));

  return documents;
}

// Update a document in a collection
export const updateDocument = (path: string, data: any) => {
  return updateDoc(doc(db, path), data);
}

//Delete a document in a collection
export const deleteDocument = (path: string) => {
  return deleteDoc(doc(db, path));
}

// -------Photo storage-------
// Upload a file with base64 format and get the url
export const uploaderBase64 = async (path: string, base64: string) => {
  return uploadString(ref(storage, path), base64, 'data_url').then(() => {
    return getDownloadURL(ref(storage, path))
  })
}

// Get data by status: new/used
export const getDocumentsByStatus = async (path: string, statusName: string) => {
  const dbQuery = query(
    collection(db, path),
    where("status", "==", statusName),
    orderBy("createdAt", "desc")
  )
  
  const querySnapshot = await getDocs(dbQuery);
  const documents = querySnapshot.docs.map(doc => ({
    ...doc.data() // data
  }));

  return documents;
}