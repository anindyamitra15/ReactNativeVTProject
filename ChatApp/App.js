import { StyleSheet } from "react-native";
import Login from "./src/pages/login.page";
import Message from "./src/pages/Message";
import CreateAcc from "./src/pages/CreateAcc";
import SplashScreen from "./src/pages/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  return (
    <>
      <Stacks />
    </>
  );
};

const Stacks = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="Message"
            options={{ headerShown: false }}
            component={Message}
          />
          <Stack.Screen
            name="SignUp"
            options={{ headerShown: false }}
            component={CreateAcc}
          />
          <Stack.Screen
            name="SignIn"
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
