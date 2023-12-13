import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  inputContainer:{
   
  },

  searchInput:{
    marginLeft: 20,
    height: 40,
    width: 250,
    // marginHorizontal: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  suggestions:{
    marginLeft: 12,
  },

  inputWithButton:{
    flexDirection: 'row',
  },

  searchButton:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    width: 100,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 5,
  },

  searchTypeContainer:{
    marginTop: 150,
    flexDirection: 'row',
    marginLeft: 20,
    
  },

  typeButton:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 30,
    backgroundColor: 'lightgrey',
    borderTopStartRadius: 7,
    borderTopEndRadius: 7,
    borderRightWidth: 1, 
    borderColor: 'black', 
  },

  selectedButton:{
    backgroundColor: 'yellow'
  },

})