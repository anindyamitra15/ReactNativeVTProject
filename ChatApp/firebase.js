import { useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore ,doc,setDoc} from "firebase/firestore";
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

export const signUp=(email, password,name,phone)=> {
  return (
    createUserWithEmailAndPassword(auth, email, password,name,phone)
    .then(() => {
    ToastAndroid.show("Account Created", ToastAndroid.SHORT)
    const myDoc = doc(db,"MyCollection","MyDocument")

    const docData={
      "name":name,
      "email":email,
      "password":password,
      "phone":phone
    }
    setDoc(myDoc, docData)
    .then(() => {console.log("success")})
    .catch(err =>console.log(err))

    }
    )
    .catch((e)=>ToastAndroid.show("error"+e.message, ToastAndroid.SHORT))
  )
}

export const login=(email, password) =>{
  return(
    signInWithEmailAndPassword(auth,email, password)
    .then(() => ToastAndroid.show("logged in successfully", ToastAndroid.SHORT))
    .catch((e)=>ToastAndroid.show("error"+e.message, ToastAndroid.SHORT))

  )
}