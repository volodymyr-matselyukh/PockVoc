import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, SafeAreaView } from 'react-native';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Button
				style={styles.butt}
				onPress={() => {
					console.log('You tapped the button!');
				}}
				title="Press Me"
			/>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},

	butt: {
		backgroundColor: 'black',
		color: 'red',
		fontSize: '24px'
	}
});
