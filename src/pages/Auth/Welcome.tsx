import React from 'react';
import { Image, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import { loginWithFacebook, loginWithGoogle } from '../../services/firebase';

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
					title={
						<>
							<FontAwesome
								name="facebook-square"
								color="#F7EDE2"
								size={16}
							/>{' '}
							Continue with Facebook
						</>
					}
					onPress={() =>
						loginWithFacebook().catch(({ code, message }) =>
							Alert.alert(code, message)
						)
					}
					backgroundColor="#29487D"
					color="#F7EDE2"
				/>
				<AppButton
					title={
						<>
							<FontAwesome
								name="google"
								color="#F7EDE2"
								size={16}
							/>{' '}
							Sign in with google
						</>
					}
					onPress={() =>
						loginWithGoogle().catch(({ code, message }) =>
							Alert.alert(code, message)
						)
					}
					backgroundColor="#d34332"
					color="#F7EDE2"
				/>
			</View>
		</AppGradient>
	);
}
