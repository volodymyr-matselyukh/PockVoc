import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity style={styles.addWordButton} onPress={() => {
					console.log('You tapped the button!');
				}}>
				<Text style={styles.buttonText}>Add word</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.learnButton} onPress={() => {
					console.log('You tapped the button!');
				}}>
				<Text style={styles.buttonText}>Learn</Text>
			</TouchableOpacity>

			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#333300',
		alignItems: 'center',
		justifyContent: 'center',
	},

	addWordButton: {
		marginTop: "2%",
		backgroundColor: 'orange',
		borderRadius: "50%",
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
		borderRadius: "50%",
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

	buttonText:{
		color: "white",
		fontSize: '24px'
	}
});
