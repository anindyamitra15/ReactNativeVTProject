import { StyleSheet, Text, View, ScrollView,SafeAreaView } from "react-native";
import React,{ useState} from "react";
import data from "../Data/data";

const MessageList = ({ item ,time, isLeft,message }) => {

    const isOnLeft = (type) => {
		if (isLeft && type === "messageContainer") {
			return {
				alignSelf: "flex-start",
				backgroundColor: "#f0f0f0",
				borderTopLeftRadius: 0,
			};
		} else if (isLeft && type === "message") {
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
    <SafeAreaView style={styles.container}>
    <View style={[styles.messageContainer, isOnLeft("messageContainer")]}>
      <View style={styles.messageView}>
        <Text style={[styles.message, isOnLeft("message")]}>{message}</Text>
      </View>
      <View style={styles.timeView}>
        <Text style={[styles.time, isOnLeft("time")]}>{time}</Text>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default MessageList;

const styles = StyleSheet.create({
    container: {
		paddingVertical: 10,
		marginVertical: 5,
	},
    messageContainer: {
        // backgroundColor: theme.colors.messageBackground,
        maxWidth: "80%",
        alignSelf: "flex-end",
        flexDirection: "row",
        borderRadius: 15,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 10,
        backgroundColor: "white"
      },
      messageView: {
        backgroundColor: "transparent",
        maxWidth: "80%",
      },
      timeView: {
        backgroundColor: "transparent",
        justifyContent: "flex-end",
        paddingLeft: 10,
      },
      message: {
        color: "black",
        alignSelf: "flex-start",
        fontSize: 15,
      },
      time: {
        color: "lightgray",
        alignSelf: "flex-end",
        fontSize: 10,
      },
});
