import React from 'react';
import { Image, TextInput, View, Text, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { loginWithEmail } from '../../services/firebase';

import logo from '../../images/logo.png';

import AppGradient from '../../components/AppGradient';
import AppButton from '../../components/AppButton';

import authStyles from './styles';

export default function Login() {
	return (
		<AppGradient>
			<Image style={authStyles.logo} source={logo} />
			<View style={authStyles.buttonContainer}>
				<Formik
					initialValues={{ email: '', password: '' }}
					validationSchema={LoginSchema}
					onSubmit={({ email, password }) =>
						loginWithEmail(
							email,
							password
						).catch(({ code, message }) =>
							Alert.alert(code, message)
						)
					}
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						values,
						errors,
					}) => (
						<>
							<TextInput
								style={[authStyles.input, authStyles.inputText]}
								placeholder="Email"
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								value={values.email}
								textContentType="emailAddress"
								keyboardType="email-address"
								autoCapitalize="none"
							/>
							{errors.email && (
								<Text style={authStyles.inputErrorText}>
									{errors.email}
								</Text>
							)}
							<TextInput
								style={[authStyles.input, authStyles.inputText]}
								placeholder="Password"
								onChangeText={handleChange('password')}
								onBlur={handleBlur('password')}
								value={values.password}
								textContentType="password"
								autoCapitalize="none"
								secureTextEntry
							/>
							{errors.password && (
								<Text style={authStyles.inputErrorText}>
									{errors.password}
								</Text>
							)}
							<AppButton
								title="Login"
								onPress={handleSubmit}
								backgroundColor="#FF5440"
								color="#F7EDE2"
							/>
						</>
					)}
				</Formik>
			</View>
		</AppGradient>
	);
}

const LoginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(6, 'Password Too Short!').required('Required'),
});
