import { StyleSheet } from "react-native";
import SelectedGenreView from "./BookResultsView";

export const styles = StyleSheet.create({
  bookResultsViewContainer : {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'blue',
  },

  individualFlatListItem : {
    flexDirection: 'column',
    width: '42%',
    height: 280,
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 25,
    backgroundColor: 'yellow'
    // borderWidth: 2,
    // borderColor: 'blue',
  },

  bookImage:{
    // width: 150,
    width: '90%',
    height: 220,
    marginBottom: 5,
    backgroundColor: 'green'
  },

  bookTitle:{
    marginTop: 10,
  },
})