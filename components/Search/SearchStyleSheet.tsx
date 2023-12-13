import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  inputContainer:{
    marginTop: 175,
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
  }

})