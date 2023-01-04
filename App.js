import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "./screens/auth/LoginScreen";
import { RegistrationScreen } from "./screens/auth/RegistrationScreen";

import { Home } from "./screens/mainScreen/Home";

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
          component={LoginScreen}
        />

        <AuthStack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={Home}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
