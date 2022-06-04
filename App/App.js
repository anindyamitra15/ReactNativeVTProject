import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/home.page";
import Login from "./src/pages/login.page";
import Message from "./src/pages/Message"
import SearchPage from "./src/pages/SearchPage";
import CreateAcc from "./src/pages/CreateAcc";

import TopUi from "./src/components/TopUi"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab  = createBottomTabNavigator();

export default function App() {
  const [msg, setMsg] = useState("default");



  return (
      <NavigationContainer>
      {/* <StatusBar style="auto" /> */}
        <Tab.Navigator initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
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
          },
        })}
        tabBarOption={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
        >
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Search" component={SearchPage} />
        <Tab.Screen name="Message" component={Message} />
        <Tab.Screen name="Create" component={CreateAcc} options={{headerShown: false}}/>
        <Tab.Screen name="Login" component={Login} options={{headerShown: false}} />
          
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
