import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	logo: {
		marginTop: 124,
		alignSelf: 'center',
	},
	buttonContainer: {
		width: '100%',
		marginTop: 64,
		paddingHorizontal: 32,
	},
	input: {
		marginBottom: 16,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: 56,
		elevation: 3,
		backgroundColor: '#FFFFFF',
	},
	inputText: {
		fontSize: 16,
		color: '#8FA7B2',
		textAlign: 'center',
	},
	inputErrorText: {
		fontFamily: 'Nunito_700Bold',
		fontSize: 16,
		color: '#FF5440',
		textAlign: 'center',
		marginBottom: 16,
	},
});

export default styles;
