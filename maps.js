import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MenuDrawer from 'react-native-side-drawer';

class Drawer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	toggleOpen = () => {
		this.setState({ open: !this.state.open });
	};

	drawerContent = () => {
		return (
			<TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
				<Text>Close</Text>
			</TouchableOpacity>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<MenuDrawer
					open={this.state.open}
					drawerContent={this.drawerContent()}
					drawerPercentage={45}
					animationTime={250}
					overlay={true}
					opacity={0.4}
				>
					<TouchableOpacity onPress={this.toggleOpen} style={styles.opendrawer}>
						<Text style={{ fontSize: 30 }}>=</Text>
					</TouchableOpacity>
				</MenuDrawer>
			</View>
		);
	}
}

function maps({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={{ flex: 1, backgroundColor: 'black' }}>
				<Drawer />
			</View>
			<MapView
				style={{
					flex: 20,
					marginHorizontal: 30,
				}}
				initialRegion={{
					latitude: 45.5209087,
					longitude: -122.6705107,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				onPress={() => navigation.navigate('second')}
			></MapView>
			<View style={{ flex: 3 }}>
				<Text style={styles.icon}>Icon</Text>
			</View>
		</View>
	);
}

export default maps;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#B2EBF4',
	},
	icon: {
		flex: 1,
		textAlign: 'center',
		backgroundColor: 'white',
	},
	opendrawer: {
		backgroundColor: '#F04812',
		paddingLeft: 20,
		position: 'absolute',
	},
	animatedBox: {
		flex: 1,
		backgroundColor: '#38C8EC',
		padding: 10,
	},
});
