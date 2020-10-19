import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../images/map-marker.png';
import { useNavigation } from '@react-navigation/native';

export default function Map() {
	const navigation = useNavigation();

	function handleNavigateToMarkerDetails() {
		navigation.navigate('MarkerDetails');
	}

	return (
		<>
			<MapView provider={PROVIDER_GOOGLE} style={styles.map}>
				<Marker
					icon={mapMarker}
					coordinate={{ latitude: 38.902, longitude: -9.395 }}
				>
					<Callout tooltip onPress={handleNavigateToMarkerDetails}>
						<View style={styles.calloutContainer}>
							<Text style={styles.calloutText}>Pajero</Text>
						</View>
					</Callout>
				</Marker>
			</MapView>

			<View style={styles.footer}>
				<Text style={styles.footerText}>
					2 users looking for assistance
				</Text>

				<TouchableOpacity
					style={styles.createMarkerButton}
					onPress={() => {}}
				>
					<Feather name="plus" size={20} color="#fff" />
				</TouchableOpacity>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
	calloutContainer: {
		width: 160,
		height: 46,
		paddingHorizontal: 16,
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		borderRadius: 16,
		justifyContent: 'center',
	},
	calloutText: {
		fontFamily: 'Nunito_700Bold',
		color: '#0089a5',
		fontSize: 14,
	},
	footer: {
		position: 'absolute',
		left: 24,
		right: 24,
		bottom: 32,

		backgroundColor: '#FFF',
		borderRadius: 20,
		height: 56,
		paddingLeft: 24,

		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		elevation: 3,
	},
	footerText: {
		fontFamily: 'Nunito_700Bold',
		color: '#8fa7b3',
	},
	createMarkerButton: {
		width: 56,
		height: 56,
		backgroundColor: '#15c3d6',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
