import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { getCurrentUser } from "../../firebase";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      if (getCurrentUser()?.uid) navigation.replace("Message");
      else navigation.replace("SignIn");
    }, 900);
    return () => {};
  }, []);

  return (
    // <View>
    <ImageBackground
      style={{ flex: 1, height: "100%", width: "100%" }}
      source={require("../assets/splashScreen.jpg")}
    ></ImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({});

export default SplashScreen;
