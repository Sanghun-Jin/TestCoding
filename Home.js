import React, { Component } from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";

class Map extends Component {
  onMapPress(e) {
    //alert("coordinates:" + JSON.stringify(e.nativeEvent.coordinate));
    let lati = e.nativeEvent.coordinate.latitude;
    let long = e.nativeEvent.coordinate.longitude;
    this.props.navigation("Linfo", {
      coordinate: [lati, long],
    });
  }
  render() {
    return (
      <MapView
        style={{ width: 300, height: 500 }}
        initialRegion={{
          latitude: 45.5209087,
          longitude: -122.6705107,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={"google"}
        onPress={this.onMapPress.bind(this)}
      ></MapView>
    );
  }
}

function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Map style={{ flex: 1 }} navigation={navigate} />
    </View>
  );
}

export default HomeScreen;
