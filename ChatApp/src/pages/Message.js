import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Platform,
  ToastAndroid,
  TouchableHighlight
} from "react-native";
import React, { useRef, useState, useEffect } from "react";

import { Button } from "react-native-elements";
// import Icons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import data from "../Data/data";
import MessageList from "../components/MessageList";
import { getCurrentUser, signUserOut, auth } from "../../firebase";
import Icons from "react-native-vector-icons/Ionicons";
import Material from "react-native-vector-icons/MaterialCommunityIcons";

const Message = ({ navigation , time, isLeft,messageing }) => {
  const [chat, setChat] = useState();
  const [message, setMessage] = useState("");

  const signout = async () => {
    try {
      await signUserOut();
      ToastAndroid.show("Signed out", ToastAndroid.SHORT);
      navigation.replace("SignIn");
    } catch (error) {
      console.log(error);
    }
  };


  const isOnLeft = (type) => {
		if (isLeft && type === "messageContainer") {
			return {
				alignSelf: "flex-start",
				backgroundColor: "#f0f0f0",
				borderTopLeftRadius: 0,
			};
		} else if (isLeft && type === "messageing") {
			return {
				color: "#000",
			};
		} else if (isLeft && type === "time") {
			return {
				color: "darkgray",
			};
		} else {
			return {
				borderTopRightRadius: 0,
			};
		}
	};

  return (
    <View style={styles.maincontainer}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          elevation: 3,
          marginTop: 10,
          padding: 17,
          paddingTop: 60,
          top: -10,
          
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>QuickTalks</Text>
        <TouchableHighlight
          style={{
            borderRadius:
              Math.round(
                Dimensions.get("window").width + Dimensions.get("window").height
              ) / 2,
            width: 10,
            height: 10,
            marginTop: 10,
            backgroundColor: "#416EE7",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text></Text>
        </TouchableHighlight>
        <View style={{ flexDirection: "row", left: 140 }}>
          
          <TouchableOpacity style={{ marginLeft: 70 }} 
        onPress={signout}
          
          >
            <Material
              name="logout"
              size={25}
              style={{ flexDirection: "row" }}
            />
          </TouchableOpacity>
        </View>
      </View>


      <ScrollView
        style={{ paddingVertical: 10, marginVertical: 5, flex: 1 }}
      >


      </ScrollView>

     

      <View style={styles.innerContainer}>
        <View style={styles.inputAndMicrophone}>
          <TouchableOpacity style={styles.emoticonButton}>
            <Icon name={"emoticon-outline"} size={23} />
          </TouchableOpacity>
          <TextInput
            multiline
            placeholder={"Type something..."}
            style={styles.input}
            value={message}
            onChangeText={(text) => setMessage(text)}
          />

          <TouchableOpacity style={styles.rightIconButtonStyle}>
            <Icon name="camera" size={23} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sendButton}>
          <Icon name={message ? "send" : "microphone"} size={23} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "pink",
    // width: Dimensions.get("window").width,
    // display: "flex",
    flex: 1,
  },
  container: {
    justifyContent: "center",
  },

  innerContainer: {
    paddingHorizontal: 10,
    // marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width: "100%",
  },
  inputAndMicrophone: {
    flexDirection: "row",
    flex: 3,
    marginRight: 10,
    paddingVertical: Platform.OS === "ios" ? 10 : 0,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "transparent",
    paddingLeft: 20,
    flex: 3,
    fontSize: 15,
    height: 50,
    alignSelf: "center",
  },
  rightIconButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 15,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#fff",
  },

  emoticonButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },

  sendButton: {
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
