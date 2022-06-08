import { StyleSheet, Text, View, ScrollView, Dimensions,TouchableOpacity , TextInput } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { io } from "socket.io-client";
import config from "../../environment/environment";
import { Button } from "react-native-elements";
import Icons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const Message = () => {
  const [chat, setChat] = useState();
  const socketRef = useRef();
  

  useEffect(() => {
    socketRef.current = io(`${config.api.base_uri}`);
    socketRef.current.on("connect", () => {
      console.log("connect", socketRef.current.id);
    });
    socketRef.current.on("update", (data) => {
      console.log(data);
    });
    socketRef.current.on("hi", (data) => console.log(data));
    return () => {
      socketRef.current.disconnect();
    };
  }, [chat]); //messages

  // onPress={() => {
  //   socketRef.current.io.emit("storeClientInfo", "rn client");
  // }}

  return (
    <View style={styles.maincontainer}>
      <ScrollView>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
      </ScrollView>
      
      <View style={styles.contentcontainer}>
      <View style={{padding:20, backgroundColor:"white" , flexDirection: "row" , alignItems:"center" , borderRadius:30,elevation:5}}>
      <TouchableOpacity style={{ }}>
            <Icons
              name="mic"
              size={27}
              style={{ flexDirection: "row", color: "gray" }}
            />
          </TouchableOpacity>
          <View style={{paddingRight:0}}>
        <TextInput
        style={styles.textInput}
        placeholder="hello"
        // numberOfLines={5}
        multiline={true}
        />
        {/* Ui problem here icons are moving towards right on typing */}
        </View>
        <View style={{flexDirection: "row", flex:1,justifyContent:"space-around"}}>
          <TouchableOpacity style={{}}>
            <Icons
              name="ios-images-outline"
              size={27}
              style={{ flexDirection: "row", color: "gray" }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{  }}>
            <Entypo
              name="attachment"
              size={27}
              style={{ flexDirection: "row", color: "gray" }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{  }}>
            <Icons
              name="send"
              size={27}
              style={{ flexDirection: "row", color: "green" }}
            />
          </TouchableOpacity>
          </View>
        {/* <Text>hello</Text> */}
      </View>
      </View>

   
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "pink",
    // width: Dimensions.get("window").width,
    display: "flex",
  },
  contentcontainer:{
    
  },
  textInput:{
    fontSize: 17,
    color: "black",
    marginLeft:15,
    textAlignVertical: 'top',
    marginRight:150
  }
});
