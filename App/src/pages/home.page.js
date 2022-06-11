import React from "react";
import TopUi from "../components/TopUi";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import data from "../Data/data";
import Icons from "react-native-vector-icons/Ionicons";
import Material from "react-native-vector-icons/MaterialCommunityIcons";

const Home = ({ navigation, item2, updateName }) => {
  // const {name} = route.params;

  const navigateToSearch = () => {
    navigation.navigate("Search");
  };

  const navigateMessage = (item) => {
    navigation.navigate("Message");
    updateName(item.Name);
  };

  const chatScreen = ({ item }) => {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => navigateMessage(item)}
          >
            <View style={styles.boxHeader}>
              <Image style={styles.tinyLogo} source={{ uri: item.Image }} />
              <Text style={styles.header2}>{item.Name}</Text>
              <Text style={{ color: "#7d7d7d", marginTop: 5, right: 10 }}>
                {item.time}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.comment} numberOfLines={1}>
                {item.Description}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          elevation: 3,
          marginTop: 10,
          padding: 15,
          paddingTop: 50,
          top: -10,
          borderBottomWidth: 5,
          borderColor: "#416EE7",
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Messaging</Text>
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
          <TouchableOpacity onPress={() => navigateToSearch()}>
            <Icons name="search" size={25} style={{ flexDirection: "row" }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Icons name="add" size={25} style={{ flexDirection: "row" }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <Material
              name="dots-vertical"
              size={25}
              style={{ flexDirection: "row" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.chatScreen}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={chatScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",

    paddingHorizontal: 15,
    paddingVertical: 25,

    width: "100%",
    borderBottomWidth: 1,
    // borderTopWidth: 1.5,
    borderColor: "#8A9DA4",
    paddingHorizontal: 15,
    // paddingTop:28,
    marginBottom: -3,
  },
  chatScreen: {
    // backgroundColor: 'white',
    backgroundColor: "white",
    // height: '55%',
    // flex:4,

    padding: 10,
    // paddingTop: 10,
    marginTop: 10,
    // paddingBottom: 30,
    paddingHorizontal: 11,
    elevation: 3,
    borderColor: "white",
    borderTopWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // width: '100%',
  },
  header2: {
    fontSize: 17,
    // lineHeight:25,
    // marginTop: 5,
    fontWeight: "bold",
    // marginBottom: 15,
    // marginTop:15,
    right: 30,
    color: "black",
    justifyContent: "flex-start",
    flex: 1,
    left: 20,
  },
  boxHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  tinyLogo: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  comment: {
    color: "black",
    justifyContent: "flex-start",
    // flex: 1,
    paddingHorizontal: 25,
    left: 38,
    marginTop: -13,
  },
});

export default Home;
