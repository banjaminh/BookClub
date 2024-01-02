import { StyleSheet } from "react-native";
import SelectedGenreView from "./BookResultsView";

export const styles = StyleSheet.create({
	bookResultsViewContainer: {
		flex: 1,
		alignItems: "center",
		marginTop: 20,
	},

	individualFlatListItem: {
		flexDirection: "column",

		width: 175,

		alignItems: "center",
		justifyContent: "center",
		marginHorizontal: 10,
		marginTop: 25,
	},

	bookImage: {
		height: 250,
		width: 150,

		marginBottom: 5,
	},

	bookTitle: {
		marginTop: 10,
	},

	touchableOpacity: {
		// width: '40%',
		// alignItems: 'center',
		// marginHorizontal: 20,
		// // borderWidth: 1,
		// // borderColor: 'black',
		// marginVertical: 10,
		// // borderRadius: 4,
		// height: '90%',
	},
});
