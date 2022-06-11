import React, { useState } from "react";
import {
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { login } from "../services/user.api.service";

const Login = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const navigateToCreate = () => {
    navigation.navigate("Create");
  };

  const submit = async () => {
    try {
      const data = await login(name, phone);
    } catch (error) {}
  };

  return (
    <ScrollView>
      {/* <Text>Login</Text> */}
      <ImageBackground
        source={require("../assets/asset.png")}
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Hello There!</Text>
          <Text style={{ fontSize: 20, color: "#C4C4C6", marginTop: 10 }}>
            Nice to meet you again
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.login}>
        <View style={{}}>
          <Text
            style={{
              marginTop: 30,
              fontSize: 30,
              fontWeight: "bold",
              left: 30,
              elevation: 5,
            }}
          >
            Login here
          </Text>
          <View style={{ paddingHorizontal: 30, marginTop: 15 }}>
            <Text style={{ color: "black", fontSize: 17, marginBottom: 10 }}>
              Username
            </Text>
            <TextInput
              style={styles.textinput}
              placeholder="Enter Username"
              value={name}
              onChangeText={(userData) => setName(userData)}
            />
            <Text style={{ color: "black", fontSize: 17, marginBottom: 10 }}>
              Phone Number
            </Text>
            <TextInput
              style={styles.textinput}
              keyboardType="phone-pad"
              placeholder="Enter Phone Number"
              value={phone}
              onChangeText={(userData) => setPhone(userData)}
            />

            <View
              style={{
                padding: 0,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <View style={styles.button}>
                <TouchableOpacity styles={styles.loginBtn} onPress={submit}>
                  <Text
                    style={{ color: "#fff", fontSize: 20, textAlign: "center" }}
                  >
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text
                  style={{
                    marginLeft: 110,
                    color: "blue",
                    fontSize: 14,
                    textDecorationLine: "underline",
                  }}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={navigateToCreate}
              style={{ paddingBottom: 70 }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "blue",
                  fontSize: 17,
                  marginTop: 45,
                  textDecorationLine: "underline",
                }}
              >
                Don't have an account?
              </Text>
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
  login: {
    backgroundColor: "#fff",
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 5,
    top: -27,
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
