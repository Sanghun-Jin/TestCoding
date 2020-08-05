import React from 'react';
import {
	Button,
	View,
	TextInput,
	ScrollView,
	StyleSheet,
	StatusBar,
	Alert,
} from 'react-native';

import Home from './Home';

function setLocationScreen({ navigation, route }) {
	return (
		<View style={styles.container}>
			<StatusBar barStyle={'dark-content'} />
			<ScrollView>
				<TextInput
					style={styles.Input}
					placeholder={'장소 이름'}
					autoFocus={true}
					returnKeyType={'next'}
					ref={(input) => {
						this.FirstTextInput = input;
					}}
					onSubmitEditing={() => {
						this.SecondTextInput.focus();
					}}
				/>
				<TextInput
					style={styles.Input}
					placeholder={'장소 설명'}
					returnKeyType={'next'}
					ref={(input) => {
						this.SecondTextInput = input;
					}}
					onSubmitEditing={() => {
						this.ThirdTextInput.focus();
					}}
				/>
				<TextInput
					style={styles.Input}
					placeholder={'공유 친구'}
					returnKeyType={'done'}
					ref={(input) => {
						this.ThirdTextInput = input;
					}}
				/>
				<TextInput style={styles.Input} editable={false}>
					{route.params.coordinate[0]}
				</TextInput>
				<TextInput style={styles.Input} editable={false}>
					{route.params.coordinate[1]}
				</TextInput>
			</ScrollView>
			<Button
				title="완료"
				onPress={() =>
					onSubmit(
						navigation,
						route.params.coordinate[0],
						route.params.coordinate[1],
					)
				}
			/>
		</View>
	);
}

function onSubmit(navigation, lati, long) {
	const map = new Home();
	map.setState({
		markers: [
			...map.state.markers,
			{
				coordinate: { latitude: lati, longitude: long },
				title: 'asd',
				description: 'asd',
			},
		],
	});
	navigation.goBack();
}

export default setLocationScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	Input: {
		borderWidth: 2,
		borderRadius: 10,
		borderColor: 'gray',
		marginHorizontal: 15,
		paddingLeft: 10,
		height: 50,
		marginTop: 10,
	},
});
