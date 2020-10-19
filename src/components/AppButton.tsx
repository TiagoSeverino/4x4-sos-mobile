import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AppButton({ title, onPress, backgroundColor, color }) {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor }]}
			onPress={onPress}
		>
			<Text style={[styles.buttonText, { color }]}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		marginBottom: 16,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 56,
	},
	buttonText: {
		fontSize: 16,
		fontFamily: 'Nunito_700Bold',
	},
});
