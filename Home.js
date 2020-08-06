import React, { useReducer } from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Editbar from './Editbar';
import Icon from './Icon';
import { useSelector } from 'react-redux';

function Home({ navigation }) {
	const { markers } = useSelector((state) => ({
		markers: state.markers,
	}));
	const { isEditting } = useSelector((state) => ({
		isEditting: state.isEditting,
	}));
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
					onPress={(e) => {
						if (isEditting) {
							navigation.navigate('Linfo', {
								coordinate: [
									e.nativeEvent.coordinate.latitude,
									e.nativeEvent.coordinate.longitude,
								],
							});
						}
					}}
				>
					{markers.map((marker) => {
						return (
							<Marker
								coordinate={{
									latitude: marker.coordinate.lati,
									longitude: marker.coordinate.long,
								}}
								title={marker.title}
								description={marker.description}
							>
								<View style={styles.marker}>
									<Image
										style={styles.markImage}
										source={require('./assets/Image/Icon/MapMarker.png')}
									/>
								</View>
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
	marker: {
		width: 50,
		height: 50,
	},
	markImage: {
		width: 50,
		height: 50,
	},
	Icon: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	Input: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
