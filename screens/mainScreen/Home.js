import React from "react";
import { TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { PostsScreen } from "../mainScreen/PostsScreen";
import { CreatePostsScreen } from "../mainScreen/CreatePostsScreen";
import { ProfileScreen } from "../mainScreen/ProfileScreen";

//icons import
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const MainTab = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarItemStyle: { borderRadius: 20 },
        tabBarStyle: {
          paddingHorizontal: 82,
          paddingTop: 9,
          paddingBottom: 34,
        },
      }}
    >
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color={focused ? "#FFFFFF" : "#212121"}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Ionicons name="exit-outline" size={24} color="#BDBDBD" />
            </TouchableOpacity>
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
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <Ionicons name="arrow-back" size={24} color="#212121" />
            </TouchableOpacity>
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
