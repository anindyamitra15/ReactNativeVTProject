import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity,ToastAndroid } from "react-native";
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
import { getCurrentUser, signUserOut,auth } from "./firebase";
// import { signUserOut } from "./firebase";


const App = () => {

  // const[isSigned, setIsSigned] = useState()

  //TODO: add Message page in the nav. there won't be any chat page, search feature will be removed
   const signout = async () =>{
    try {
      await signUserOut().then(() => {ToastAndroid.show("Signed out", ToastAndroid.SHORT),currentUser() })
    }
    catch(error){
      console.log(error)
    }
   }

   var a1=new Boolean();
   const currentUser = ()=>{
    if(getCurrentUser!==null){
      a1=false;
      console.log(a1)
    }else{
      a1=true;
      console.log(a1)
    }
   }

  //  console.log(currentUser);
  currentUser()

  // const Stack = createNativeStackNavigator();
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="Message"
            options={{ headerShown: false }}
            component={Home}
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
                  <TouchableOpacity
                    style={{ left: 5 }}
                   onPress={()=>signout()}
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
      </NavigationContainer> */}
      {getCurrentUser!==null?
      <Login/>
      :<Message/>}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
