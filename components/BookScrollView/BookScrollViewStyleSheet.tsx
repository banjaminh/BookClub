import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bookContainer: {
    width: 125,
    height: 225,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 20,

    // backgroundColor: 'none',
    // height: '15%',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
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
    marginTop: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center'
  },

  modalBookText: {
    alignSelf: 'center'
  },

  modalBookDescription: {
    marginTop: 15
  },

  modalClose: {
    color: 'blue',
    marginTop: -5,
    textAlign: 'right',
  },
  
  // modalBuyButton: {
  //   backgroundColor: '#ff9900',
  //   padding: 10,
  //   // paddingVertical: 10,
  //   // paddingHorizontal: 5,
  //   borderRadius: 5,
  //   marginTop: 10,
  //   alignItems: 'center'
  // }
})