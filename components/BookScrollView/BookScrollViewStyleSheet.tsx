import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bookContainer: {
    width: 125,
    height: 225,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 20,
    // backgroundColor: '#EAB464',
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
  },

  modalClose: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'right',
  },
  
})