import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Map from './pages/Map';
import MarkerDetails from './pages/MarkerDetails';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Screen name="Map" component={Map} />
				<Screen name="MarkerDetails" component={MarkerDetails} />
			</Navigator>
		</NavigationContainer>
	);
}
