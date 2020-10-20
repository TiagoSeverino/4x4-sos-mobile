import React, { useEffect, useState } from 'react';
import {
	Image,
	View,
	ScrollView,
	Text,
	StyleSheet,
	Dimensions,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { AdMobBanner, isAvailableAsync } from 'expo-ads-admob';

import { adUnitDeailsID } from '../../config';

import mapMarker from '../../images/map-marker.png';

export default function MarkerDetail() {
	const [bannerAvailable, setBannerAvailable] = useState(false);

	useEffect(() => {
		isAvailableAsync().then((available) => setBannerAvailable(available));
	}, []);

	return (
		<ScrollView style={styles.container}>
			<View style={styles.imagesContainer}>
				<ScrollView horizontal pagingEnabled>
					<Image
						style={styles.image}
						source={{
							uri:
								'https://images3.alphacoders.com/208/thumb-1920-208747.jpg',
						}}
					/>
					<Image
						style={styles.image}
						source={{
							uri: 'https://i.imgur.com/2Wf3XFH.jpg',
						}}
					/>
					<Image
						style={styles.image}
						source={{
							uri: 'https://i.imgur.com/6smr5Rp.png',
						}}
					/>
				</ScrollView>
			</View>

			<View style={styles.detailsContainer}>
				<Text style={styles.title}>Pajero</Text>
				<Text style={styles.description}>
					Hoje calhou-me a mim.. preciso de ajuda na Ribeira da Quinta
					do Conde.. Alguem que possa ajudar ? Tenho cinta! Obrigado.
				</Text>

				{bannerAvailable && (
					<AdMobBanner
						bannerSize="largeBanner"
						adUnitID={adUnitDeailsID}
						servePersonalizedAds
						onDidFailToReceiveAdWithError={() =>
							setBannerAvailable(false)
						}
						style={{
							marginTop: 32,
							alignItems: 'center',
						}}
					/>
				)}

				<View style={styles.mapContainer}>
					<MapView
						initialRegion={{
							latitude: -27.2092052,
							longitude: -49.6401092,
							latitudeDelta: 0.008,
							longitudeDelta: 0.008,
						}}
						zoomEnabled={false}
						pitchEnabled={false}
						scrollEnabled={false}
						rotateEnabled={false}
						style={styles.mapStyle}
					>
						<Marker
							coordinate={{
								latitude: -27.2092052,
								longitude: -49.6401092,
							}}
						>
							<Image source={mapMarker} />
						</Marker>
					</MapView>
					<View style={styles.routesContainer}>
						<Text style={styles.routesText}>
							Directions to here
						</Text>
					</View>
				</View>

				<RectButton style={styles.contactButton} onPress={() => {}}>
					<FontAwesome name="whatsapp" size={24} color="#FFF" />
					<Text style={styles.contactButtonText}>Get in touch</Text>
				</RectButton>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	imagesContainer: {
		height: 240,
	},

	image: {
		width: Dimensions.get('window').width,
		height: 240,
		resizeMode: 'cover',
	},

	detailsContainer: {
		padding: 24,
	},

	title: {
		color: '#4D6F80',
		fontSize: 30,
		fontFamily: 'Nunito_700Bold',
	},

	description: {
		fontFamily: 'Nunito_600SemiBold',
		color: '#5c8599',
		lineHeight: 24,
		marginTop: 16,
	},

	mapContainer: {
		borderRadius: 20,
		overflow: 'hidden',
		borderWidth: 1.2,
		borderColor: '#B3DAE2',
		marginTop: 40,
		backgroundColor: '#E6F7FB',
	},

	mapStyle: {
		width: '100%',
		height: 150,
	},

	routesContainer: {
		padding: 16,
		alignItems: 'center',
		justifyContent: 'center',
	},

	routesText: {
		fontFamily: 'Nunito_700Bold',
		color: '#0089a5',
	},

	separator: {
		height: 0.8,
		width: '100%',
		backgroundColor: '#D3E2E6',
		marginVertical: 40,
	},

	scheduleContainer: {
		marginTop: 24,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	scheduleItem: {
		width: '48%',
		padding: 20,
	},

	scheduleItemBlue: {
		backgroundColor: '#E6F7FB',
		borderWidth: 1,
		borderColor: '#B3DAE2',
		borderRadius: 20,
	},

	scheduleItemGreen: {
		backgroundColor: '#EDFFF6',
		borderWidth: 1,
		borderColor: '#A1E9C5',
		borderRadius: 20,
	},

	scheduleText: {
		fontFamily: 'Nunito_600SemiBold',
		fontSize: 16,
		lineHeight: 24,
		marginTop: 20,
	},

	scheduleTextBlue: {
		color: '#5C8599',
	},

	scheduleTextGreen: {
		color: '#37C77F',
	},

	contactButton: {
		backgroundColor: '#3CDC8C',
		borderRadius: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 56,
		marginTop: 40,
	},

	contactButtonText: {
		fontFamily: 'Nunito_800ExtraBold',
		color: '#FFF',
		fontSize: 16,
		marginLeft: 16,
	},
});
