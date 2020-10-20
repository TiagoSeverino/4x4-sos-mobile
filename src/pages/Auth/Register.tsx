import React from 'react';
import { Image, TextInput, View, Text, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { registerWithEmail } from '../../services/firebase';

import logo from '../../images/logo.png';

import AppGradient from '../../components/AppGradient';
import AppButton from '../../components/AppButton';

import authStyles from './styles';

export default function Register() {
	return (
		<AppGradient>
			<Image style={authStyles.logo} source={logo} />
			<View style={authStyles.buttonContainer}>
				<Formik
					initialValues={{
						displayName: '',
						email: '',
						password: '',
						confirmPassword: '',
					}}
					validationSchema={RegisterSchema}
					onSubmit={({ displayName, email, password }) =>
						registerWithEmail(
							displayName,
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
								placeholder="Name"
								onChangeText={handleChange('displayName')}
								onBlur={handleBlur('displayName')}
								value={values.displayName}
								textContentType="nickname"
								keyboardType="name-phone-pad"
							/>
							{errors.displayName && (
								<Text style={authStyles.inputErrorText}>
									{errors.displayName}
								</Text>
							)}
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
								textContentType="newPassword"
								autoCapitalize="none"
								secureTextEntry
							/>
							{errors.password && (
								<Text style={authStyles.inputErrorText}>
									{errors.password}
								</Text>
							)}
							<TextInput
								style={[authStyles.input, authStyles.inputText]}
								placeholder="Confirm Password"
								onChangeText={handleChange('confirmPassword')}
								onBlur={handleBlur('confirmPassword')}
								value={values.confirmPassword}
								textContentType="newPassword"
								autoCapitalize="none"
								secureTextEntry
							/>
							{errors.confirmPassword && (
								<Text style={authStyles.inputErrorText}>
									{errors.confirmPassword}
								</Text>
							)}
							<AppButton
								title="Register"
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

const RegisterSchema = Yup.object().shape({
	displayName: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(6, 'Password Too Short!').required('Required'),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref('password')],
		'Passwords must match'
	),
});
