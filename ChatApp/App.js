import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";

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

initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
