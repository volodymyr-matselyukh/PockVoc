import { ListItem, Text } from "@react-native-material/core";
import { FlatList, View } from "react-native";
import globalStyles from "../styles/GlobalStyles";
import { StyleSheet } from "react-native";

export default function AutoComplete() {
	return (
		<View style={globalStyles.view}>
			<FlatList
				data={[
					{ key: "Devin" },
					{ key: "Dan" },
					{ key: "Dominic" },
					{ key: "Jackson" },
					{ key: "James" },
					{ key: "Joel" },
					{ key: "John" },
					{ key: "Jillian" },
					{ key: "Jimmy" },
					{ key: "Julie" },
				]}
				renderItem={({ item }) => (
					<Text style={styles.item}>{item.key}</Text>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
		backgroundColor: 'white'
	}
});
