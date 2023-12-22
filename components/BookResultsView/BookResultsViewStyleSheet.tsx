import { StyleSheet } from "react-native";
import SelectedGenreView from "./BookResultsView";

export const styles = StyleSheet.create({
  bookResultsViewContainer : {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'blue',
  },

  individualFlatListItem : {
    flexDirection: 'column',
    width: '100%',
    height: 280,
    alignItems: 'center',
    // marginLeft: 20,
    marginTop: 25,
    // backgroundColor: 'yellow'
    // borderWidth: 2,
    // borderColor: 'blue',
  },

  bookImage:{
    // width: 150,
    width: '100%',
    height: '75%',
    marginBottom: 5,
    backgroundColor: 'green',
    
  },

  bookTitle:{
    marginTop: 10,
  },

  touchableOpacity: {
    width: '40%',
    alignItems: 'center',
    marginHorizontal: 20,
    // borderWidth: 1,
    // borderColor: 'black',
    marginVertical: 10,
    // borderRadius: 4,
    height: '90%',
    
  },
  
  
})