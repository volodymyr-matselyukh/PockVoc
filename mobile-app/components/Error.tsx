import { StyleSheet } from "react-native";

interface Props{
	text: string
}

export default function Error({text}:Props)
{
	return (
		<div style={styles.error}>{text}</div>
	)
}

const styles = StyleSheet.create({
	error: {
		color: 'red'
	}
});