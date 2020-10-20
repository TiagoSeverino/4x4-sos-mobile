import React, { useContext, useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { auth } from './services/firebase';

import { AuthUserContext } from './components/AuthUserProvider';

import App from './pages/App';
import Auth from './pages/Auth';

export default function Routes() {
	const { user, setUser } = useContext(AuthUserContext);
	const [authLoaded, setAuthLoaded] = useState(false);

	useEffect(() => {
		const unsubscribeAuth = auth.onAuthStateChanged(async (authUser) => {
			try {
				await (authUser ? setUser(authUser) : setUser(null));
				setAuthLoaded(true);
			} catch (error) {
				console.log(error);
			}
		});

		return unsubscribeAuth;
	}, []);

	if (!authLoaded) return null;

	return (
		<NavigationContainer>{user ? <App /> : <Auth />}</NavigationContainer>
	);
}
