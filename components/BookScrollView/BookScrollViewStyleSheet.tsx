import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  
  bookContainer: {
    width: 125,
    
    
    alignItems: 'center',
    marginLeft: 20,
    // backgroundColor: 'yellow',
    // backgroundColor: 'none',
    // height: '15%',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    // borderWidth: 2,
    // borderColor: 'black'

  },

  bookImage:{
    width: 125,
    height: 220,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    overflow: 'hidden',

    alignSelf: 'center',
    marginBottom: 5
  },

  bookTitle:{
    marginTop: 10,
  },

 
})