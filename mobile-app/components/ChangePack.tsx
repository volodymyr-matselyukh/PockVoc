import { ListItem, TextInput } from "@react-native-material/core";
import { Pack } from "../models/Pack";
import { useEffect, useState } from "react";
import { getPacks, upsertPack } from "../storage/PacksStorage";
import { View } from "react-native";
import {Button} from "@react-native-material/core";
import globalStyles from "../styles/GlobalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PockVocRoutes } from "../router/Routes";

export default function ChangePacks({navigation}: NativeStackScreenProps<PockVocRoutes, 'ChangePack'>) {
	let [packs, setPacks] = useState<Pack[]>([]);

	useEffect(() => {
		async () => {
			var packs = await getPacks();

			setPacks(packs);
		};
	});

	return (
		<View style={globalStyles.view}>
			<Button
				onPress={() => {
					navigation.navigate("AddNewPack");
				}}
				title="Add new pack"
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
