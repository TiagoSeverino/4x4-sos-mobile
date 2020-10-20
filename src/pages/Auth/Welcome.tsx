import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '../../images/logo.png';

import AppGradient from '../../components/AppGradient';
import AppButton from '../../components/AppButton';

import authStyles from './styles';

export default function Welcome() {
	const navigation = useNavigation();

	function handleNavigateToLogin() {
		navigation.navigate('Login');
	}

	function handleNavigateToRegister() {
		navigation.navigate('Register');
	}

	return (
		<AppGradient>
			<Image style={authStyles.logo} source={logo} />
			<View style={authStyles.buttonContainer}>
				<AppButton
					title="Login"
					onPress={handleNavigateToLogin}
					backgroundColor="#FF5440"
					color="#F7EDE2"
				/>
				<AppButton
					title="Register"
					onPress={handleNavigateToRegister}
					backgroundColor="#22DD35"
					color="#F7EDE2"
				/>
				<AppButton
					title="Continue with Facebook"
					onPress={() => {}}
					backgroundColor="#29487D"
					color="#F7EDE2"
				/>
			</View>
		</AppGradient>
	);
}
