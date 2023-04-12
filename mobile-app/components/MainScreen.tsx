import { StyleSheet, TouchableOpacity, Text, Dimensions, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PockVocRoutes } from '../router/Routes';
import globalStyles from '../styles/GlobalStyles';

export default function MainScreen({navigation}: NativeStackScreenProps<PockVocRoutes, 'Main'>) {
	return (
		<View style={globalStyles.view}>
			<TouchableOpacity
				style={styles.addWordButton}
				onPress={() => {
					navigation.navigate("AddWord");
				}}
			>
				<Text style={styles.buttonText}>Add word</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.learnButton}
				onPress={() => {
					console.log("You tapped the button!");
				}}
			>
				<Text style={styles.buttonText}>Learn</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	addWordButton: {
		marginTop: "2%",
		backgroundColor: 'orange',
		borderRadius: Dimensions.get('window').width * 0.5,
		width: "50VW",
		height: "50VW",
		flex: 1,
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: '50VW',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: "0 0 10px yellow"
	},

	learnButton: {
		marginTop: "2%",
		backgroundColor: '#009933',
		borderRadius: Dimensions.get('window').width * 0.5,
		width: "50VW",
		height: "50VW",
		flex: 1,
		flexGrow: 0,
		flexShrink: 0,
		flexBasis: '50VW',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: "0 0 10px dark-blue"
	},

	buttonText: {
		color: "white",
		fontSize: 24
	}
});
