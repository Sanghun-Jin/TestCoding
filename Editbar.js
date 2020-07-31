import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default class Editbar extends Component {
  state = {
    switchValue: false,
    isEditing: false
  };
  toggleSwitch = () => {
    this.setState((preState) => {
      return {
        switchValue: !preState.switchValue
      };
    });
  };
  render() {
    return (
      <View style={StyleSheet.container}>
        <Switch
          style={{ marginTop: 30 }}
          onValueChange={this.toggleSwitch}
          value={this.state.switchValue}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
