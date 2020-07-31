import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import maps from "./first";
import second from "./second";

const AppNavigator = createStackNavigator(
  {
    First: maps,
    second: second,
  },
  {
    initialRouteName: "First",
  }
);
export default createAppContainer(AppNavigator);
