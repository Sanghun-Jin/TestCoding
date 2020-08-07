/*
설치 모듈
@react-navigation/native
@react-navigation/stack
react-native-gesture-handler
react-native-screens
@react-native-community/masked-view
redux
react-redux
expo-location
*/

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import HomeScreen from './Home';
import setLocationScreen from './SetLocationInfo';

import * as Location from 'expo-location';

const Stack = createStackNavigator();

function App() {
	const dispatch = useDispatch();
	getLocation = async () => {
		try {
			await Location.requestPermissionsAsync();
			const {
				coords: { latitude, longitude },
			} = await Location.getCurrentPositionAsync();
			dispatch({
				type: 'changeLocation',
				latitude: latitude,
				longitude: longitude,
			});
		} catch (error) {
			alert(
				'위치정보를 찾지 못했습니다.',
				'설정에서 위치권한을 허용해 주세요.',
			);
		}
	};

	useEffect(() => getLocation());
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
