import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
// import { login } from "../services/user.api.service";
import { signUp } from "../../firebase";

const CreateAcc = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSignup = async () => {
    try {
      await signUp(email, password, name, phone);
      navigation.replace("Message");
      // console.log("created dir " + name);
    } catch (error) {
      console.log(error);
      if(error.code === "auth/email-already-in-use") {
        ToastAndroid.show("Email already exists, try signing in", ToastAndroid.SHORT);
        navigation.replace("SignIn");
      }
      else ToastAndroid.show("Errors" + error, ToastAndroid.SHORT);
    }
  };

  const submit = async () => {
    if (!name || !email || !phone || !password) {
      return ToastAndroid.show(
        "please fill up every fields",
        ToastAndroid.SHORT
      );
    }

    if (password !== confirmPass) {
      return ToastAndroid.show(
        "password and confirm password must be same",
        ToastAndroid.SHORT
      );
    }

    // if all fields are valid
    handleSignup();
  };

  return (
    <ScrollView style={styles.container}>
      {/* <Text>Contact.page</Text> */}
      <View style={{ paddingRight: 300 }}>
        <View style={styles.topStyle}>
          <Text></Text>
        </View>
      </View>

      <View style={styles.CreateAcc}>
        <Text style={styles.header}>Create Account</Text>
        <Text style={styles.caption}>Begin Your New Journey With Us</Text>

        <View style={{ paddingHorizontal: 20, top: 30 }}>
          <Text style={styles.label}>Enter your name</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Enter name"
            value={name}
            onChangeText={(userData) => setName(userData)}
          />
          <Text style={styles.label}>Enter your email</Text>
          <TextInput
            style={styles.textinput}
            placeholder="email@gmail.com"
            value={email}
            onChangeText={(userData) => setEmail(userData)}
          />
          <Text style={{ color: "black", fontSize: 17, marginBottom: 10 }}>
            Enter your phone number
          </Text>
          <TextInput
            style={styles.textinput}
            placeholder="+9155656662"
            value={phone}
            onChangeText={(userData) => setPhone(userData)}
            keyboardType="phone-pad"
          />
          <Text style={styles.label}>Create Password</Text>
          <TextInput
            style={styles.textinput}
            placeholder="At least 6 characters"
            value={password}
            onChangeText={(userData) => setPassword(userData)}
            secureTextEntry
          />
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Confirm it"
            value={confirmPass}
            onChangeText={(userData) => setConfirmPass(userData)}
            secureTextEntry
          />

          <View style={styles.wrapper}>
            <CheckBox
              disabled={false}
              iconRight
              //   checkedIcon="clear"
              checkedColor="#416EE7"
              checked={toggleCheckBox}
              onPress={() => {
                setToggleCheckBox(!toggleCheckBox);
              }}
            />
            <Text style={styles.wrapperText}>
              I have read and agreed to all the terms and conditions
            </Text>
          </View>

          <View style={{ paddingRight: 200 }}>
            <View
              style={[
                styles.button,
                { backgroundColor: toggleCheckBox ? "#416EE7" : "grey" },
              ]}
            >
              <TouchableOpacity
                styles={[styles.loginBtn]}
                disabled={!toggleCheckBox}
                onPress={submit}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    textAlign: "center",
                  }}
                >
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={{ paddingLeft: 280 }}>
        <View style={styles.BottomStyle}>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateAcc;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    overflow: "hidden",
  },
  topStyle: {
    backgroundColor: "#416EE7",
    padding: 60,
    borderBottomRightRadius: 150,
  },
  BottomStyle: {
    backgroundColor: "#416EE7",
    padding: 60,
    marginTop: 0,
    borderTopLeftRadius: 150,
    // alignItems: "flex-end",
  },
  CreateAcc: {
    display: "flex",
    justifyContent: "center",
    top: -30,
  },
  header: {
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
  caption: {
    color: "gray",
    fontSize: 15,
    textAlign: "center",
    top: 10,
  },
  label: {
    color: "black",
    fontSize: 17,
    marginBottom: 10,
  },
  textinput: {
    borderColor: "black",
    backgroundColor: "#E2E2E2",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 5,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    // marginTop: 20,
    alignItems: "center",
    left: -16,
  },
  wrapperText: {
    // marginLeft:10,
    color: "#7d7d7d",
    // marginTop:8,
  },
  button: {
    marginTop: 10,
    // backgroundColor: "#416EE7",

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
