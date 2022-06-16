import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
// import { Dimensions } from 'react-native';
import Icons from "react-native-vector-icons/Ionicons";
import React from "react";

const TopUi = () => {
  return (
    //   <ScrollView>]
    <SafeAreaView style={{ top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
    <ScrollView style={styles.container}>
      <View style={[styles.topUi, styles.shadowProp]}>
        <View style={[styles.topViews, styles.icons]}>
          <Text style={styles.text1}>Chat</Text>
          <TouchableOpacity style={{ left: 50, flexDirection: "row" }}>
            {/* stupid way */}
            <View style={styles.input}>
              <TextInput style={styles.inputStyle} placeholder="Search" />
            </View>
            <Icons name="search" size={25} style={{ flexDirection: "row" }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons name="settings" size={25} style={{ flexDirection: "row" }} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default TopUi;

const styles = StyleSheet.create({
  maincontainer:{
   marginBottom:50,
   display:"flex",
   justifyContent:"center",
   alignItems: "center",
   
  //  top:-450
  },
  container: {
    //   stupid way of doing this,
    // top: 10,
    overflow: "visible",
    // paddingTop:40,
  },
  topUi: {
    backgroundColor: "#E9F5FA",
    height: "43%",
    width: Dimensions.get("window").width,
    elevation: 20,
    paddingTop:30,
    // paddingBottom:0,

    
  },
  topViews: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1.5,
    // borderTopWidth: 1.5,
    borderColor: "#8A9DA4",
    paddingHorizontal: 15,
    paddingTop:28,
    // padding: 30,
    // elevation: 10,

    width: "100%",
    borderRadius: 5,
  },
  text1: {
    color: "black",
    //   alignItems: "center",
    textAlign: "center",
    fontSize: 25,
    left: 10,
    //   justifyContent:"center",
  },
  icons: {
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    // left:10,

    // justifyContent:"space-around",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#8A9DA4",
    paddingHorizontal: 35,
    right: 10,
  },
  inputStyle: {
    fontSize: 17,
    color: "#8A9DA4",
  },
});
