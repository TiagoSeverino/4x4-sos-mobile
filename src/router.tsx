import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Map from './pages/Map';
import MarkerDetails from './pages/MarkerDetails';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{
					headerShown: false,
					cardStyle: {
						backgroundColor: '#F2F3F5',
					},
				}}
			>
				<Screen name="Map" component={Map} />
				<Screen
					name="MarkerDetails"
					component={MarkerDetails}
					options={{
						headerShown: true,
						header: () => <Header title="Assistance Details" />,
					}}
				/>
			</Navigator>
		</NavigationContainer>
	);
}
