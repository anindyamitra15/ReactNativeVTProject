import React, { useState } from "react";
import {
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { signIn } from "../../firebase";

const Login = ({ navigation }) => {
  //states for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    try {
      await signIn(email, password);

      ToastAndroid.show("Signed In Successfully", ToastAndroid.SHORT);

      navigation.replace("Message");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        navigation.navigate("SignUp");
        ToastAndroid.show(
          "User not found, please sign up...",
          ToastAndroid.SHORT
        );
      } else if (error.code === "auth/invalid-email") {
        ToastAndroid.show(
          "please fill up every fields properly",
          ToastAndroid.SHORT
        );
      } else if (
        error.code === "auth/internal-error" ||
        error.code === "auth/wrong-password"
      ) {
        //TODO: check if this error case is correct
        ToastAndroid.show("Wrong credentials..", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Errors" + error, ToastAndroid.SHORT);
      }
    }
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/asset.png")}
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello There!</Text>

          <Text style={styles.caption}>Nice to see you again!</Text>
        </View>
      </ImageBackground>

      <View style={styles.login}>
        <View style={styles.paddedForm}>
          <Text style={styles.signInText}>Sign In</Text>
          <View style={{}}>
            <Text style={styles.label}>Email ID</Text>

            <TextInput
              style={styles.textinput}
              placeholder="Enter your email"
              keyboardType="email-address"
              value={email}
              onChangeText={(userData) => setEmail(userData)}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.textinput}
              // keyboardType="phone-pad"
              placeholder="Enter your password"
              value={password}
              onChangeText={(userData) => setPassword(userData)}
              secureTextEntry
            />

            <View style={styles.buttonPill}>
              <View style={styles.button}>
                <TouchableOpacity styles={styles.loginBtn} onPress={submit}>
                  <Text style={styles.signInButtonText}>Sign in</Text>
                </TouchableOpacity>
              </View>
              {/* TODO: expo doesn't seem to have google auth */}
              {/* <TouchableOpacity>
                <Text style={styles.googleSignInText}>Google Sign In</Text>
              </TouchableOpacity> */}
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
              style={{ paddingBottom: 70 }}
            >
              <Text style={styles.createAccLink}>Don't have an account?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    alignSelf: "stretch",
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  header: {
    padding: 40,
    paddingBottom: 200,
  },
  headerText: {
    fontSize: 52,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 60,
    elevation: 5,
  },
  caption: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
  },
  signInText: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
    left: 30,
    elevation: 5,
  },
  paddedForm: {
    paddingHorizontal: 30,
    marginTop: 15,
  },
  label: {
    color: "black",
    fontSize: 17,
    marginVertical: 15,
  },
  buttonPill: {
    padding: 0,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  googleSignInText: {
    marginLeft: 110,
    color: "blue",
    fontSize: 17,
    textDecorationLine: "underline",
  },
  createAccLink: {
    textAlign: "center",
    color: "blue",
    fontSize: 17,
    marginTop: 20,
    textDecorationLine: "underline",
  },
  login: {
    backgroundColor: "#fff",
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 5,
    top: -120,
  },
  textinput: {
    borderColor: "black",
    backgroundColor: "#D1D1D1",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 5,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#416EE7",
    padding: 15,
    borderRadius: 15,
    paddingHorizontal: 30,
  },
  loginBtn: {
    padding: 20,
    paddingLeft: 40,
    // alignItems: "center"
  },
});
export default Login;
