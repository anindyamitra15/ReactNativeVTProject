import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Home from "./src/pages/home.page";
import Login from "./src/pages/login.page";
import Message from "./src/pages/Message";
import SearchPage from "./src/pages/SearchPage";
import CreateAcc from "./src/pages/CreateAcc";
import SplashScreen from "./src/pages/SplashScreen"
import Data from "./src/Data/data";
import TopUi from "./src/components/TopUi";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Tabs=() => {
  return(
    <>
    <Tab.Navigator 
        initialRouteName="Home2"
        
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home2') {
              iconName = focused ? 'home' : 'home-outline';
              size = focused ? size + 5 : size;
            } else if (route.name === 'Login') {
              iconName = focused ? 'apps' : 'apps-outline';
              size = focused ? size + 5 : size;
            } else if (route.name === 'Message') {
              iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
              size = focused ? size + 5 : size;
            } 
            else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
              size = focused ? size + 5 : size;
            } 
            else if (route.name === 'Create') {
              iconName = focused ? 'create' : 'create-outline';
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
            elevation:5
            // backgroundColor: "gray"
          },
          
        })}
        tabBarOptions={
          {
          activeTintColor: '#416EE7',
          inactiveTintColor: 'gray',
          showLabel: false,
         
        }}
        
        
        >
        <Tab.Screen name="Home2" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Search" component={SearchPage} />
        {/* <Tab.Screen name="Message" component={Message} /> */}
        {/* <Tab.Screen name="Create" component={CreateAcc} options={{headerShown: false}}/> */}
        <Tab.Screen name="Login" component={Login} options={{headerShown: false}} />
          
        </Tab.Navigator>
    </>
  )
}


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Tabs}
          />

          <Stack.Screen
            name="Message"
            component={Message}
            options={{
              headerTitle: "hifh",
              headerRight: () => (
                <View
                  style={{
                    flexDirection: "row",
                    right: 20,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity style={{ right: 10 }}>
                    <Ionicons
                      name="call"
                      size={24}
                      style={{ flexDirection: "row", color: "black" }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icons
                      name="dots-vertical"
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
            name="SplashScreen"
            options={{ headerShown: false }}
            component={SplashScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </>
  )
}

export default App

const styles = StyleSheet.create({})
