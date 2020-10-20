import * as firebase from 'firebase';
import 'firebase/auth';
import * as Facebook from 'expo-facebook';
import * as GoogleSignIn from 'expo-google-sign-in';

import { firebaseConfig } from '../config';

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const loginWithEmail = (email: string, password: string) =>
	auth.signInWithEmailAndPassword(email, password);

export const loginWithFacebook = async () => {
	await Facebook.initializeAsync({ appId: firebaseConfig.facebookAppId });

	const { type, token } = await Facebook.logInWithReadPermissionsAsync({
		permissions: ['public_profile'],
	});

	if (type !== 'success')
		throw { code: 'Error', message: 'Unable to login with facebook' };

	const credential = firebase.auth.FacebookAuthProvider.credential(token);
	return auth.signInWithCredential(credential);
};

export const loginWithGoogle = async () => {
	await GoogleSignIn.askForPlayServicesAsync();
	const { type, user } = await GoogleSignIn.signInAsync();
	const data = await GoogleSignIn.GoogleAuthentication.prototype.toJSON();

	if (type !== 'success')
		throw { code: 'Error', message: 'Unable to login with google' };

	const credential = firebase.auth.GoogleAuthProvider.credential(
		data.idToken,
		data.accessToken
	);

	return auth.signInWithCredential(credential);
};

export const registerWithEmail = (
	name: string,
	email: string,
	password: string
) =>
	auth.createUserWithEmailAndPassword(email, password).then(({ user }) => {
		if (user)
			user.updateProfile({
				displayName: name,
			});
	});

export const logout = () => auth.signOut();

export const passwordReset = (email: string) =>
	auth.sendPasswordResetEmail(email);
