import React, { useContext, useEffect, useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { auth, setCurrentScreen } from './services/firebase';

import { AuthUserContext } from './components/AuthUserProvider';

import App from './pages/App';
import Auth from './pages/Auth';

export default function Routes() {
	const { user, setUser } = useContext(AuthUserContext);
	const [authLoaded, setAuthLoaded] = useState(false);

	const routeNameRef = useRef();
	const navigationRef = useRef();

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
		<NavigationContainer
			ref={navigationRef}
			onStateChange={() => {
				const previousRouteName = routeNameRef.current;
				const currentRouteName = navigationRef.current.getCurrentRoute()
					.name;

				if (previousRouteName !== currentRouteName)
					setCurrentScreen(currentRouteName);

				routeNameRef.current = currentRouteName;
			}}
		>
			{user ? <App /> : <Auth />}
		</NavigationContainer>
	);
}
