import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Editbar from './Editbar';
import Icon from './Icon';

export class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			markers: [],
		};
	}
	onMapPress(e) {
		let lati = e.nativeEvent.coordinate.latitude;
		let long = e.nativeEvent.coordinate.longitude;
		this.props.navigation.navigate('Linfo', {
			coordinate: [lati, long],
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle={'dark-content'} />
				<View style={styles.Editbar}>
					<Editbar />
				</View>
				<View style={styles.Map}>
					<MapView
						style={styles.Map}
						initialRegion={{
							latitude: 37.258355,
							longitude: 127.03145842,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
						showsUserLocation
						followsUserLocation
						provider={'google'}
						onPress={this.onMapPress.bind(this)}
					>
						{this.state.markers.map((marker) => {
							return (
								<Marker {...marker}>
									<View style={styles.marker}>
										<Text style={styles.text}>{marker.Title}</Text>
									</View>
									<Callout>
										<Text>{marker.description}</Text>
									</Callout>
								</Marker>
							);
						})}
					</MapView>
				</View>
				<View style={styles.Icon}>
					<Icon />
				</View>
			</View>
		);
	}
}

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	Editbar: {
		flex: 2,
		backgroundColor: 'white',
		justifyContent: 'flex-start',
		alignItems: 'flex-end',
		paddingRight: 20,
	},
	Map: {
		flex: 11,
	},
	Icon: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	marker: {
		backgroundColor: '#550bbc',
		padding: 5,
		borderRadius: 5,
	},
	text: {
		color: '#FFF',
		fontWeight: 'bold',
	},
	Input: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
