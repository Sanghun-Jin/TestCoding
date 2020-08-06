import React from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function Editbar() {
	const dispatch = useDispatch();
	const { isEditting } = useSelector((state) => ({
		isEditting: state.isEditting,
	}));
	return (
		<View style={StyleSheet.container}>
			<Switch
				style={{ marginTop: 30 }}
				onValueChange={() =>
					dispatch({
						type: 'switching',
					})
				}
				value={isEditting}
			/>
		</View>
	);
}

const Styles = StyleSheet.create({
	container: {
		flex: 3,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
