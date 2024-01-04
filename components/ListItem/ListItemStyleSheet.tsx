import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	wrap: {
		width: 400,
        padding: 15,
		borderColor: "#ccc",
		borderWidth: 1,
		marginVertical: 5,
		marginHorizontal: 10,
		borderRadius: 5,
		backgroundColor: "#fff",
		shadowColor: "#000",
		textShadowOffset: { width: 3, height: 3 },
		shadowOpacity: 0.2,
	},

	container: { flexDirection: "row" },
	details: { margin: 10 },
	text: { opacity: 0.7 },
	textContainer: { justifyContent: "space-around" },

	userNotesStyle: {
		marginVertical: 7,
	},

	dateStyle: {
		fontWeight: "bold",
	},
});
