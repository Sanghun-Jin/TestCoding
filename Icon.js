import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

function Icon() {
	return (
		<View style={styles.IconSet}>
			<TouchableOpacity style={styles.TouchIcon}>
				<Image
					style={styles.TouchIcon}
					source={require('./assets/Image/Icon/Friends.png')}
					width={70}
					height={50}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.TouchIcon}>
				<Image
					style={styles.TouchIcon}
					source={require('./assets/Image/Icon/Home.png')}
					width={100}
					height={50}
				/>
			</TouchableOpacity>
			<TouchableOpacity style={styles.TouchIcon}>
				<Image
					style={styles.TouchIcon}
					source={require('./assets/Image/Icon/Mark.png')}
					width={80}
					height={50}
				/>
			</TouchableOpacity>
		</View>
	);
}

export default Icon;

const styles = StyleSheet.create({
	IconSet: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
	},
	TouchIcon: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
