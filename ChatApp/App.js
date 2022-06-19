import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Home from "./src/pages/home.page";
import Login from "./src/pages/login.page";
import Message from "./src/pages/Message";
import SearchPage from "./src/pages/SearchPage";
import CreateAcc from "./src/pages/CreateAcc";
import SplashScreen from "./src/pages/SplashScreen";
// import TopUi from "./src/components/TopUi";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getCurrentUser, signUserOut } from "./firebase";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Message"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home2") {
              iconName = focused ? "home" : "home-outline";
              size = focused ? size + 5 : size;
            } else if (route.name === "Login") {
              iconName = focused ? "apps" : "apps-outline";
              size = focused ? size + 5 : size;
            } else if (route.name === "Message") {
              iconName = focused
                ? "chatbubble-ellipses"
                : "chatbubble-ellipses-outline";
              size = focused ? size + 5 : size;
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
              size = focused ? size + 5 : size;
            } else if (route.name === "Create") {
              iconName = focused ? "create" : "create-outline";
              size = focused ? size + 5 : size;
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarHideOnKeyboard: true,
          keyboardHide: true,
          showLabel: false,
          tabBarStyle: {
            height: 70,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            elevation: 5,
            // backgroundColor: "gray"
          },
        })}
      >
        <Tab.Screen
          name="Home2"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Search" component={SearchPage} />
        {/* <Tab.Screen name="Message" component={Message} /> */}
        {/* <Tab.Screen name="Create" component={CreateAcc} options={{headerShown: false}}/> */}
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
};

const App = () => {
  //TODO: add Message page in the nav. there won't be any chat page, search feature will be removed
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="Message"
            options={{ headerShown: false }}
            component={Tabs}
          />

          <Stack.Screen
            name="Home"
            component={Message}
            options={{
              headerTitle: `${"Message"}`,
              headerRight: () => (
                <View
                  style={{
                    flexDirection: "row",
                    right: 20,
                    alignItems: "center",
                  }}
                >
                  {/* <TouchableOpacity style={{ right: 15 }}>
                    <Ionicons
                      name="call"
                      size={24}
                      style={{ flexDirection: "row", color: "black" }}
                    />
                  </TouchableOpacity> */}
                  <TouchableOpacity
                    style={{ left: 5 }}
                    onPress={async () => {
                      //TODO: navigate to Login from this callback
                      await signUserOut();
                    }}
                  >
                    <Icons
                      name="logout"
                      size={27}
                      style={{ flexDirection: "row", color: "black" }}
                    />
                  </TouchableOpacity>
                </View>
              ),
            }}
          />

          {/* <Stack.Screen
            name="Search"
            // options={{ headerShown: false }}
            component={SearchPage}
          /> */}
          {/* <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          /> */}
          <Stack.Screen
            name="Create"
            options={{ headerShown: false }}
            component={CreateAcc}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="SplashScreen"
            options={{ headerShown: false }}
            component={SplashScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
