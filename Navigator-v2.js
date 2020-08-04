/*
설치 모듈

@react-navigation/native
@react-navigation/stack
react-native-gesture-handler
react-native-screens
@react-native-community/masked-view
*/

import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Home";

function setLocationScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{route.params.coordinate[0]}</Text>
      <Text>{route.params.coordinate[1]}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Linfo" component={setLocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
