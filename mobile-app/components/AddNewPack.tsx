import { View } from "react-native";
import globalStyles from "../styles/GlobalStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "@react-native-material/core";
import Error from "./Error";
import { languages } from "../models/Languages";
import AutoComplete from "./AutoComplete/AutoComplete";
import { useState } from "react";

const validationSchema = Yup.object().shape({
	word: Yup.string().required("Required"),
	translation: Yup.string().required("Required"),
});

export default function AddNewPack() {

	let [selectedLanguage, setSelectedLanguage] = useState<number>();

	return (
		<View style={globalStyles.view}>
			<Formik
				initialValues={{
					packName: "",
					originalLanguageId: "",
					translationLanguageId: "",
				}}
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
						Selected language id: {selectedLanguage}
						<AutoComplete onSelected={(itemId) => setSelectedLanguage(itemId as number)}></AutoComplete>
					</View>
				)}
			</Formik>
		</View>
	);
}
