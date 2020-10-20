import { Platform } from 'react-native';

const { select } = Platform;

export const adUnitDeailsID = select({
	// https://developers.google.com/admob/ios/test-ads
	ios: 'ca-app-pub-3940256099942544/2934735716',
	// https://developers.google.com/admob/android/test-ads
	android: 'ca-app-pub-3940256099942544/6300978111',
});

export const firebaseConfig = {
	// Replace all XXXXs with real Firebase API keys
	apiKey: 'XXXX',
	authDomain: 'XXXX',
	databaseURL: 'XXXX',
	projectId: 'XXXX',
	storageBucket: 'XXXX',
	messagingSenderId: 'XXXX',
	appId: 'XXXX',
	facebookAppId: 'XXXX',
};
