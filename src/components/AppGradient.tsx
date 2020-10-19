import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function AppGradient({ children }) {
	return (
		<LinearGradient
			style={{ flex: 1, alignItems: 'center' }}
			colors={['#00C7C7', '#2AB5D1']}
			start={[0, 0]}
			end={[1, 1]}
		>
			{children}
		</LinearGradient>
	);
}
