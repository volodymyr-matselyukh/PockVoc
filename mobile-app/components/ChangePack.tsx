import { ListItem, TextInput } from "@react-native-material/core";
import { Pack } from "../models/Pack";
import { useEffect, useState } from "react";
import { getPacks, upsertPack } from "../storage/PacksStorage";
import { View } from "react-native";
import {Button} from "@react-native-material/core";
import globalStyles from "../styles/GlobalStyles";

export default function ChangePacks() {
	let [packs, setPacks] = useState<Pack[]>([]);
	let [newPackName, setNewPackName] = useState<string>();

	useEffect(() => {
		async () => {
			var packs = await getPacks();

			setPacks(packs);
		};
	});

	return (
		<View style={globalStyles.view}>
			<TextInput
				value={newPackName}
				onChangeText={(e) => setNewPackName(e.valueOf())}
			/>

			<Button
				onPress={() => {
					upsertPack({
						name: newPackName!,
						order: 0,
						
					});
				}}
				title="Add"
				compact={true}
			/>

			{packs
				.sort((pack) => pack.order)
				.map((pack) => (
					<ListItem onPress={() => console.log(pack.id)}>
						{pack.name}
					</ListItem>
				))}
		</View>
	);
}
