import { useState } from "react";
import auth from '@react-native-firebase/auth';


function collection(param1, param2) {

}

const db = null

function getDocs(param) {

}

function getAuth() {

}


import { ToastAndroid } from "react-native";


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
  // return getAuth().currentUser;
  return undefined
}

export function signUserOut() {
  // console.log(await signOut(auth));
  return signOut(auth);
  // console.log(signOut(auth))
}

export function getMessages() {
  // try {
  // const messagesRef = doc(db, "messages", "cnwWgtnqfZeVox4OoMlT");
  // getDoc(messagesRef).then((docu) => console.log(docu.data()));

  // const query = orderBy(messagesRef, "createdAt", "asc").limit(25);
  // getDocs(query).then((docu) => console.log(76, docu));

  const messagesRef = collection(db, "messages");
  // const query = messageRef.orderBy("createdAt")
  const output = {};
  
  // getDocs(messagesRef)
  //   .then((docu) => {
  //     docu.docs.forEach((docSnap) => {
  //       output[docSnap.id] = docSnap.data();
  //     });
  //     console.log(output);
  //   })
  //   .catch((error) => console.log(error));

  // } catch (error) {
  //   return error.message;
  // }
}

getMessages();
