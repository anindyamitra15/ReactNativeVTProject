import { useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { ToastAndroid } from "react-native";

GoogleSignin.configure({
  webClientId:
    "177988330912-2vr71bb0u2h9ukarhcimgq5sp4q9ud17.apps.googleusercontent.com",
});

export const signUp = async (email, password, name, phone) => {
  await auth().createUserWithEmailAndPassword(email, password, name, phone);

  ToastAndroid.show(`Account for ${name} created`, ToastAndroid.SHORT);

  await firestore().collection("users").doc(getCurrentUser().uid).set({
    name: name,
    email: email,
    phone: phone,
  });

  ToastAndroid.show(`${name}'s database updated`, ToastAndroid.SHORT);
};

export const signIn = async (email, password) => {
  await auth().signInWithEmailAndPassword(email, password);
};

export const googleSignIn = async () => {
  try {
    const { idToken } = await GoogleSignin.signIn();
    console.log("idToken", idToken);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = () => {
  return auth().currentUser;
};

export const signUserOut = async () => {
  await auth().signOut();
};

export const messageRef = firestore().collection("messages");

export const getMessages = async () => {
  return await messageRef.orderBy("createdAt").limit(25).get();
};

export const getServerTimestamp = () => {
  return firestore.FieldValue.serverTimestamp();
};

export const getMessagesSubscription = async () => {
  return messageRef
    .orderBy("createdAt")
    .limit(25)
    .onSnapshot((documentSnapshot) => {
      // console.log("User data: ", documentSnapshot);
    });
};
