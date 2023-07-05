import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './components/MainScreen';
import AddWord from './components/AddWord';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChangePacks from './components/ChangePack';
import AddNewPack from './components/AddNewPack';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Main"
						component={MainScreen}
						options={{ title: 'Welcome' }}
					/>
					<Stack.Screen name="AddWord" component={AddWord} />
					<Stack.Screen name="ChangePack" component={ChangePacks} />
					<Stack.Screen name="AddNewPack" component={AddNewPack} />
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});