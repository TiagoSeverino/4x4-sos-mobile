import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

export default function AppGradient({ children }) {
	return (
		<LinearGradient
			style={{ flex: 1 }}
			colors={['#00C7C7', '#2AB5D1']}
			start={[0, 0]}
			end={[1, 1]}
		>
			<ScrollView style={{ width: '100%' }}>{children}</ScrollView>
		</LinearGradient>
	);
}
