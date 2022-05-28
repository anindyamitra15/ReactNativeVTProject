import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import Icons from "react-native-vector-icons/Ionicons";
import data from "../Data/data";

const SearchPage = ({ navigation }) => {
  const navigateMessage = () => {
    navigation.navigate("Message");
  };
  const searchScreen = ({ item }) => {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={navigateMessage}>
            <View style={styles.boxHeader}>
              <Image style={styles.tinyLogo} source={{ uri: item.Image }} />
              <Text style={styles.header2}>{item.Name}</Text>
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
          padding: 22,
          alignItems: "center",
          //   paddingTop: 50,
          //   top: -10,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <Text style={{ color: "blue", fontSize: 16 }}>Add New People</Text>
        <TouchableOpacity style={{ marginLeft: 20, left: 180 }}>
          <Icons
            name="add-circle"
            size={27}
            style={{ flexDirection: "row", color: "blue" }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.chatScreen}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={searchScreen}
      />
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    display: "flex",

    paddingHorizontal: 15,
    paddingVertical: 25,

    width: "100%",
    borderBottomWidth: 0.5,
    // borderTopWidth: 1.5,
    borderColor: "#8A9DA4",
    paddingHorizontal: 15,
    // paddingTop:28,
  },
  boxHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  tinyLogo: {
    width: 45,
    height: 45,
    borderRadius: 10,
    marginBottom:-10,
  },
  header2: {
    fontSize: 17,
    textAlign: "left",
    fontWeight: "bold",

    color: "black",
    justifyContent: "space-between",
    flex: 1,
    left: 20,
  },
});
