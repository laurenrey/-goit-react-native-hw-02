import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import { LoginScreen } from "./screens/auth/LoginScreen";
import { RegistrationScreen } from "./screens/auth/RegistrationScreen";
import { PostsScreen } from "./screens/mainScreen/PostsScreen";
import { CreatePostsScreen } from "./screens/mainScreen/CreatePostsScreen";
import { ProfileScreen } from "./screens/mainScreen/ProfileScreen";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
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
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Posts" component={PostsScreen} />
      <MainTab.Screen name="Create" component={CreatePostsScreen} />
      <MainTab.Screen name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};
