import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { LoginScreen } from "./screens/auth/LoginScreen";
import { RegistrationScreen } from "./screens/auth/RegistrationScreen";
import { PostsScreen } from "./screens/mainScreen/PostsScreen";
import { CreatePostsScreen } from "./screens/mainScreen/CreatePostsScreen";
import { ProfileScreen } from "./screens/mainScreen/ProfileScreen";

//icons import
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

// import { useRoute } from "./router";

const useRoute = (isAuth) => {
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
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarItemStyle: { borderRadius: 20, position: "relative" },
        tabBarStyle: { paddingHorizontal: 84, paddingVertical: 9 },
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color={focused ? "#FFFFFF" : "#212121"}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="plus"
              size={24}
              color={focused ? "#FFFFFF" : "#212121"}
            />
          ),
        }}
      />

      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#FFFFFF" : "#212121"}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default function App() {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
