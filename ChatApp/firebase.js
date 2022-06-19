import { useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, setDoc } from "firebase/firestore";

import { ToastAndroid } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyDl-xX016yxmIC94ED6Tn9rGs9oxZ26vTc",
  authDomain: "reactnativevtproject.firebaseapp.com",
  databaseURL:
    "https://reactnativevtproject-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactnativevtproject",
  storageBucket: "reactnativevtproject.appspot.com",
  messagingSenderId: "177988330912",
  appId: "1:177988330912:web:fc27988802c0bd291370c5",
};

//initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export const signUp = async (email, password, name, phone) => {
  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      name,
      phone
    );
    ToastAndroid.show(`Account for ${name} created`, ToastAndroid.SHORT);

    await setDoc(doc(db, "users", credential.user.uid), {
      name: name,
      email: email,
      phone: phone,
    });

    ToastAndroid.show(`${name}'s database updated`, ToastAndroid.SHORT);
  } catch (error) {
    throw error;
  }
};

export const signIn = async (email = "", password = "") => {
  return signInWithEmailAndPassword(auth, email, password);
};

export function getCurrentUser() {
  return getAuth().currentUser;
}


export  function signUserOut() {
  // console.log(await signOut(auth));
  return (
    signOut(auth)
    // console.log(signOut(auth))
    )
}