import { View, Dimensions } from "react-native";
import { TextInput, Button, Text } from "@react-native-material/core";
import globalStyles from "../styles/GlobalStyles";
import { Formik } from "formik";
import { StyleSheet } from "react-native";
import { useMediaValues } from "../styles/MediaQueries";
import Error from "./Error";

import * as Yup from "yup";
import { useEffect, useState } from "react";
import {
	getDefaultPack
} from "../storage/CustomerSettingsStorage";
import { Pack } from "../models/Pack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PockVocRoutes } from "../router/Routes";

const validationSchema = Yup.object().shape({
	word: Yup.string().required("Required"),
	translation: Yup.string().required("Required"),
});

export default function AddWord({navigation}: NativeStackScreenProps<PockVocRoutes, 'AddWord'>) {
	var { isMobile } = useMediaValues();

	var [defaultPack, setDefaultPack] = useState<Pack | null>(null);

	useEffect(() => {
		async () => {
			setDefaultPack(await getDefaultPack());
		};
	}, []);

	return (
		<View style={globalStyles.view}>
			<Formik
				initialValues={{ word: "", translation: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					touched,
				}) => (
					<View>
						<TextInput
							onChangeText={handleChange("word")}
							onBlur={handleBlur("word")}
							value={values.word}
							label="Word"
							style={
								isMobile
									? styles.textInputMobile
									: styles.textInputTablet
							}
						/>
						{errors.word && touched.word ? (
							<Error text={errors.word} />
						) : null}

						<TextInput
							onChangeText={handleChange("translation")}
							onBlur={handleBlur("translation")}
							value={values.translation}
							label="Translation"
							style={
								isMobile
									? styles.textInputMobile
									: styles.textInputTablet
							}
						/>
						{errors.translation && touched.translation ? (
							<Error text={errors.translation} />
						) : null}

						<div style={styles.block}>
							<label style={styles.packNameText} htmlFor="DefaultPack">Add to pack:</label>
							<Text style={styles.packNameText}>{defaultPack ? defaultPack.name : "--//--"}</Text>

							<Button
								onPress={() => {
									navigation.navigate("ChangePack");
								}}
								title="Change"
								compact={true}
								style={styles.changePackButton}
							/>
						</div>

						<Button
							onPress={handleSubmit}
							title="Submit"
							style={styles.submitButton}
							contentContainerStyle={
								styles.pressableContainerStyle
							}
						/>
					</View>
				)}
			</Formik>
		</View>
	);
}

const styles = StyleSheet.create({
	textInputMobile: {
		marginTop: Dimensions.get("window").height * 0.02,
		width: Dimensions.get("window").width * 0.7,
	},

	textInputTablet: {
		marginTop: Dimensions.get("window").height * 0.02,
		width: 600,
	},

	submitButton: {
		marginTop: Dimensions.get("window").height * 0.02,
		width: 100,
		justifyContent: "center",
		alignSelf: "flex-end",
	},

	pressableContainerStyle: {
		padding: 30,
	},

	block: {
		marginTop: Dimensions.get("window").height * 0.02,
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
	},

	changePackButton: {
		width: 100,
	},

	packNameText: {
		color: "white",
		marginRight: 10,
	},
});
