import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";

import { Button } from "react-native-elements";
import Icons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import data from "../Data/data"
import MessageList from "../components/MessageList";

const Message = ({ isLeft, item }) => {

  
  const [chat, setChat] = useState();
  const [message, setMessage] = useState("");


  // onPress={() => {
  //   socketRef.current.io.emit("storeClientInfo", "rn client");
  // }}

  // const isOnLeft = (type) => {
  //   if (isLeft && type === "messageContainer") {
  //     return {
  //       alignSelf: "flex-start",
  //       backgroundColor: "#f0f0f0",
  //       borderTopLeftRadius: 0,
  //     };
  //   } else if (isLeft && type === "message") {
  //     return {
  //       color: "#000",
  //     };
  //   } else if (isLeft && type === "time") {
  //     return {
  //       color: "darkgray",
  //     };
  //   } else {
  //     return {
  //       borderTopRightRadius: 0,
  //     };
  //   }
  // };

  return (
    <View style={styles.maincontainer}>
      <ScrollView style={{ paddingVertical: 10, marginVertical: 5 ,flex:1}}>
      {data.map((item, id) => (
				<MessageList
					key={id}
					time={item.time}
					isLeft={item.id !== id.current}
					message={item.Description}

				/>
			))}
      
      </ScrollView>

      <View style={styles.innerContainer}>
        <View style={styles.inputAndMicrophone}>
          <TouchableOpacity
            style={styles.emoticonButton}
          >
            <Icon
              name={"emoticon-outline"}
              size={23}
            />
          </TouchableOpacity>
          <TextInput
            multiline
            placeholder={"Type something..."}
            style={styles.input}
            value={message}
            onChangeText={(text) => setMessage(text)}
          />

          <TouchableOpacity style={styles.rightIconButtonStyle}>
            <Icon
              name="camera"
              size={23}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sendButton}>
          <Icon
            name={message ? "send" : "microphone"}
            size={23}
          />
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
