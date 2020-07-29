import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: []
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          Title: 'asd'
        }
      ]
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: 45.5209087,
            longitude: -122.6705107,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          onPress={this.handlePress}
        >
          {this.state.markers.map((marker) => {
            return (
              <Marker {...marker}>
                <View style={styles.marker}>
                  <Text style={styles.text}>{marker.Title}</Text>
                </View>
              </Marker>
            );
          })}
        </MapView>
        <TextInput
          style={styles.Input}
          placeholder={'약속 이름'}
          placeholderTextColor={'#999'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    backgroundColor: '#550bbc',
    padding: 5,
    borderRadius: 5
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  Input: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
