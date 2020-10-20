import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import logo from '../../images/logo.png';

import AppGradient from '../../components/AppGradient';
import AppButton from '../../components/AppButton';

import authStyles from './styles';

export default function Register() {
	return (
		<AppGradient>
			<Image style={authStyles.logo} source={logo} />
			<View style={authStyles.buttonContainer}>
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
