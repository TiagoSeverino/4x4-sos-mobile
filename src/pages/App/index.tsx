import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/Header';

import Map from './Map';
import MarkerDetails from './MarkerDetails';

const Stack = createStackNavigator();

export default function App() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: '#F2F3F5',
				},
			}}
		>
			<Stack.Screen name="Map" component={Map} />
			<Stack.Screen
				name="MarkerDetails"
				component={MarkerDetails}
				options={{
					headerShown: true,
					header: () => <Header title="Assistance Details" />,
				}}
			/>
		</Stack.Navigator>
	);
}
