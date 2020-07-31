import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

function second({ route, navigation }) {
  const { asd } = route.params.asd;
  alert(asd);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>second Screen</Text>
      <Button title="Go 1" onPress={() => navigation.navigate("First")} />
    </View>
  );
}
export default second;
