import { useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import firestore, {
  getFirestore,
  doc,
  setDoc,
  collection,
  useCollectionData,
} from "firebase/firestore";
import { ToastAndroid } from "react-native";
// import 'firebase/auth';

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

  // return createUserWithEmailAndPassword(auth, email, password, name, phone)
  //   .then(() => {
  //     ToastAndroid.show("Account Created", ToastAndroid.SHORT);
  //     const myDoc = doc(db, "MyCollection", "MyDocument");

  //     const docData = {
  //       name: name,
  //       email: email,
  //       password: password,
  //       phone: phone,
  //     };
  //     setDoc(myDoc, docData)
  //       .then(() => {
  //         console.log("success");
  //       })
  //       .catch((err) => console.log(err));
  //   })
  //   .catch((e) => ToastAndroid.show("error" + e.message, ToastAndroid.SHORT));
};

export const signIn = (email = "", password = "") => {
  return signInWithEmailAndPassword(auth, email, password);
};
