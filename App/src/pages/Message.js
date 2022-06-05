import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { io } from "socket.io-client";
import config from "../../environment/environment";
import { Button } from "react-native-elements";

const Message = () => {
  const [chat, setChat] = useState();
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(`${config.api.base_uri}`);
    socketRef.current.on("connect", () => {
      console.log("connect",socketRef.current.id);
    });
    socketRef.current.on("update", (data) => {
      console.log(data);
    });
    socketRef.current.on("hi", data => console.log(data))
    return () => {
      socketRef.current.disconnect();
    };
  }, [chat]); //messages
  return (
    <View>
      <Text>Message</Text>
      <Button
        onPress={() => {
          socketRef.current.io.emit("storeClientInfo", "rn client");
        }}
        title="Test"
      />
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({});
