import { StyleSheet } from "react-native";
import SelectedGenreView from "./SelectedGenreView";

export const styles = StyleSheet.create({
  selectedGenreViewContainer : {
    flex: 1,
    alignItems: 'center',
  },

  individualFlatListItem : {
    flexDirection: 'column',
    width: '42%',
    height: 280,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 25,
    // borderWidth: 2,
    // borderColor: 'blue',
  },

  bookImage:{
    width: '90%',
    height: 220,
    marginBottom: 5,
  },

  bookTitle:{
    marginTop: 10,
  },
})