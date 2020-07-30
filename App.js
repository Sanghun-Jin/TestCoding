import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import MapView from 'react-native-maps';
import { v4 as uuidv4 } from 'uuid';

import Editbar from './Editbar';
import Marking from './CustomMarker';
import SetLocationinfo from './SetLocationinfo';

export default class maps extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			coordinate: {},
			markers: {},
		};
		this._touchMap = this._touchMap.bind(this);
	}

	_setTitle = (text) => {
		this.setState({
			title: text,
		});
	};

	_touchMap(e) {
		this.setState({
			coordinate: e.nativeEvent.coordinate,
		});
		this.setState((prevState) => {
			const ID = uuidv4();
			const newMarker = {
				[ID]: {
					id: ID,
					title: this.title,
					coordinate: this.coordinate,
				},
			};
			const newState = {
				...prevState,
				markers: {
					...prevState.markers,
					...newMarker,
				},
			};
			return { ...newState };
		});
		Alert.alert('클릭');
		console.log(this.state);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Editbar />
				<MapView
					style={styles.container}
					initialRegion={{
						latitude: 45.5209087,
						longitude: -122.6705107,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					//onPress={this._touchMap}
				></MapView>
				<TextInput
					style={styles.Input}
					placeholder={'약속 이름'}
					placeholderTextColor={'#999'}
					onSubmitEditing={this._setTitle}
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
		justifyContent: 'center',
	},
	Input: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
