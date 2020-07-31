import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

function maps({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="go 2"
        onPress={() => navigation.navigate("second", { asd: "asd" })}
      />
    </View>
  );
}
export default maps;
