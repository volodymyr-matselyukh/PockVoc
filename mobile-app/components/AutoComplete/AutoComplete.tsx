import { Text, TextInput } from "@react-native-material/core";
import {
	FlatList,
	Image,
	ScrollView,
	TouchableHighlight,
	View,
} from "react-native";
import globalStyles from "../../styles/GlobalStyles";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { languages } from "../../models/Languages";

 interface IProps{
	onSelected(itemId: number | string): void;
 }

export default function AutoComplete(props: IProps) {
	let [searchText, setSearchText] = useState<string>("");

	return (
		<View style={[globalStyles.view, styles.view]}>
			<TextInput
				onChangeText={(e) => setSearchText(e.valueOf())}
				value={searchText}
				label="Filter"
				inlineImageLeft="search_icon"
			/>

			{	
				searchText 
				
				&&
				
				<TouchableHighlight
					style={styles.touchable}
					onPress={() => setSearchText("")}
				>
					<Image
						style={styles.closeIcon}
						source={require("./images/clear_50x50.png")}
					/>
				</TouchableHighlight>
			}

			<ScrollView style={styles.scrollView}>
				<FlatList
					style={styles.flatList}
					data={[
						...languages
							.sort((a, b) => {
								if (a.name > b.name) {
									return 1;
								}

								return -1;
							})
							.filter(
								(lang) =>
									!searchText ||
									lang.name
										.toLowerCase()
										.indexOf(searchText.toLowerCase()) >=
										0 ||
									lang.nativeName
										.toLowerCase()
										.indexOf(searchText.toLowerCase()) >= 0
							),
					]}
					renderItem={({ item }) => (
						<Text
							key={item.id}
							style={styles.item}
							onPress={(e) => 
								{
									console.log(item.id);
									props.onSelected(item.id);
								}}
						>
							{item.name}
						</Text>
					)}
				/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	touchable: {
		position: "absolute",
		right: 0,
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44,
		backgroundColor: "white",
	},
	closeIcon: {
		width: "25px",
		height: "25px",
		position: "absolute",
		right: "10px",
		top: "15px",
	},
	flatList: {
		width: "100%",
	},
	view: {
		height: "300px",
	},
	scrollView: {
		width: "100%",
		height: "300px",
	},
});
