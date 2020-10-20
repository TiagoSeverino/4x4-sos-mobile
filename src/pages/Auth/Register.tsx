import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import logo from '../../images/logo.png';

import AppGradient from '../../components/AppGradient';
import AppButton from '../../components/AppButton';

export default function Welcome() {
	return (
		<AppGradient>
			<Image style={styles.logo} source={logo} />
			<View style={styles.buttonContainer}>
				<AppButton
					title="Register"
					onPress={() => {}}
					backgroundColor="#FF5440"
					color="#F7EDE2"
				/>
			</View>
		</AppGradient>
	);
}

const styles = StyleSheet.create({
	logo: {
		marginTop: 124,
	},
	buttonContainer: {
		width: '100%',
		marginTop: 64,
		paddingHorizontal: 32,
	},
});
