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
  TouchableHighlight,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";

import { Button } from "react-native-elements";
// import Icons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import data from "../Data/data";
import MessageList from "../components/MessageList";
import { getCurrentUser, signUserOut, auth, getMessages } from "../../firebase";
import Icons from "react-native-vector-icons/Ionicons";
import Material from "react-native-vector-icons/MaterialCommunityIcons";

const Message = ({ navigation, time, isLeft, messageing }) => {
  const [chat, setChat] = useState();
  const [message, setMessage] = useState("");
  const messages = [];
  // console.log(getMessages())

  const sendMessage = () => {
    if (!message)
      //TODO: recording mode
      return ToastAndroid.show(
        "Recording is not enabled for this user",
        ToastAndroid.SHORT
      );

    ToastAndroid.show("Sending Message", ToastAndroid.SHORT);
    //TODO: add interactivity
    setMessage("");
  };

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
      <View style={styles.topContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>QuickTalks</Text>
        <TouchableHighlight style={styles.onlineStatus}>
          <Text></Text>
        </TouchableHighlight>
        <View style={{ flexDirection: "row", left: 140 }}>
          <TouchableOpacity style={{ marginLeft: 70 }} onPress={signout}>
            <Material
              name="logout"
              size={25}
              style={{ flexDirection: "row" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Message ScrollView section start */}
      <ScrollView style={{ paddingVertical: 10, marginVertical: 5, flex: 1 }}>
      {/* {messages&&messages.map()} */}
        <MessageList isLeft message="" time=""/>
      </ScrollView>
      {/* Message ScrollView section end */}

      <View style={styles.bottomContainer}>
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
          {/* TODO: Commenting the camera button for simplicity */}
          {/* <TouchableOpacity style={styles.rightIconButtonStyle}>
            <Icon name="camera" size={23} />
          </TouchableOpacity> */}
        </View>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            sendMessage();
          }}
        >
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

  onlineStatus: {
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
  },

  topContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    elevation: 10,
    marginTop: 5,
    paddingHorizontal: 17,
    paddingBottom: 17,
    paddingTop: 60,
    top: -10,

    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  bottomContainer: {
    paddingHorizontal: 10,
    // marginHorizontal: 10,
    elevation: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 20,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
