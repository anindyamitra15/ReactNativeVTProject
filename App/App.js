import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/home.page";
import Login from "./src/pages/login.page";
import { fetchSomething } from "./src/services/api.service";

export default function App() {
  const [msg, setMsg] = useState("default");

  useEffect(() => {
    fetchSomething()
      .then((ms) => {
        setMsg(JSON.stringify(ms));
      })
      .catch((e) => {
        setMsg(JSON.stringify(e));
      });

    return () => {};
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{msg}</Text>
      {/* <Home/> */}
      {/* <Login/> */}
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
