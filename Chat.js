import Expo from 'expo';
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import { ThemeColors, withOrientation } from 'react-navigation';
const io = require('socket.io-client');

// Replace this URL with your own, if you want to run the backend locally!
const SocketEndpoint = 'https://server0501.herokuapp.com/';

const { height, width } = Dimensions.get('window');

export default class App extends React.Component {
	state = {
		isConnected: false,
		data: null,
		text: '',
	};

	clearText = () => {
		const { text } = this.state;
		if (text !== '') {
			this.setState({ text: '' });
		}
	};

	controlText = (text) => {
		this.setState({ text: text });
	};

	componentDidMount() {
		const socket = io(SocketEndpoint, {
			transports: ['websocket'],
		});

		socket.on('connect', () => {
			this.setState({ isConnected: true });
		});
		socket.on('connection', () => {
			this.setState({ isConnected: true });
		});
		var name = '김만덕';
		socket.emit('asd', name);
	}

	render() {
		const { text } = this.state;
		return (
			<View style={styles.container}>
				<KeyboardAvoidingView style={styles.Board} behavior="padding">
					<View style={styles.chat}>
						<ScrollView style={{ flex: 1 }}>
							<Text style={styles.send}>asd</Text>
							<Text style={styles.receive}>asd</Text>
							<Text style={styles.send}>asd</Text>
							<Text style={styles.send}>asd</Text>
							<Text style={styles.send}>asd</Text>
							<Text style={styles.send}>asd</Text>
							<Text style={styles.send}>asd</Text>
							<Text style={styles.send}>asd</Text>
							<Text style={styles.send}>asd</Text>
							<Text style={styles.send}>asd</Text>
							<Text style={styles.send}>asd</Text>
							<Text style={styles.send}>asd</Text>
							<Text style={styles.send}>asd</Text>
						</ScrollView>
					</View>
					<View style={styles.Keyboard}>
						<TextInput
							style={styles.input}
							placeholder={'여기에 텍스트를 입력하세요.'}
							onSubmitEditing={this.clearText}
							onChangeText={this.controlText}
							value={text}
							returnKeyType={'done'}
						/>
						<TouchableOpacity style={styles.sendbtn} onPress={this.clearText}>
							<Text style={{ color: 'white' }}>전송</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1DDB16',
		alignItems: 'center',
		justifyContent: 'center',
	},

	Board: {
		width: width - 50,
		height: height - 50,
		backgroundColor: 'white',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},

	chat: {
		flex: 10,
		paddingTop: 20,
	},

	Keyboard: {
		flex: 1,
		flexDirection: 'row',
		padding: 5,
	},

	input: {
		flex: 4,
		height: 40,
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'gray',
		paddingLeft: 10,
	},

	sendbtn: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		height: 40,
		borderWidth: 1,
		backgroundColor: '#59DA50',
	},

	send: {
		backgroundColor: '#FAED7D',
		flex: 1,
		alignSelf: 'flex-start',
		padding: 10,
		paddingHorizontal: 30,
		marginLeft: 20,
		marginBottom: 10,
	},

	receive: {
		backgroundColor: '#4374D9',
		color: 'white',
		alignSelf: 'flex-end',
		padding: 10,
		paddingHorizontal: 30,
		marginRight: 20,
		marginBottom: 10,
	},
});
