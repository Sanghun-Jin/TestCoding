import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	ScrollView,
	TextInput,
} from 'react-native';

function SetLocationinfo({ navigation }) {
	return (
		<View style={styles.container}>
			<ScrollView>
				<TextInput
					style={styles.Input}
					placeholder={'장소 이름'}
					autoFocus={true}
					returnKeyType={'next'}
					onSubmitEditing={() => {
						this.SecondTextInput.focus();
					}}
					blurOnSubmit={false}
				/>
				<TextInput
					style={styles.Input}
					placeholder={'장소 이름'}
					returnKeyType={'next'}
					ref={(input) => {
						this.SecondTextInput = input;
					}}
					onSubmitEditing={() => {
						this.ThirdTextInput.focus();
					}}
					blurOnSubmit={false}
				/>
				<TextInput
					style={styles.Input}
					placeholder={'장소 이름'}
					returnKeyType={'next'}
					ref={(input) => {
						this.ThirdTextInput = input;
					}}
					onSubmitEditing={() => {
						this.FourthTextInput.focus();
					}}
					blurOnSubmit={false}
				/>
				<TextInput
					style={styles.Input}
					placeholder={'장소 이름'}
					returnKeyType={'next'}
					ref={(input) => {
						this.FourthTextInput = input;
					}}
					onSubmitEditing={() => {
						this.FifthTextInput.focus();
					}}
					blurOnSubmit={false}
				/>
				<TextInput
					style={styles.Input}
					placeholder={'장소 이름'}
					returnKeyType={'done'}
					ref={(input) => {
						this.FifthTextInput = input;
					}}
				/>
			</ScrollView>
			<Button title="완료" onPress={() => navigation.navigate('First')} />
		</View>
	);
}

export default SetLocationinfo;

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
