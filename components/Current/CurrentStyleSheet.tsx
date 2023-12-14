import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  currentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookImage: {
    width: 125,
    height: 220,
    // borderRadius: 10,
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 1,
    // shadowRadius: 4,
    overflow: 'hidden',

    alignSelf: 'center',
    marginBottom: 5,
  },
  flatListContainer: {
    marginTop: 10,
  },
  flatListTitle: {
    marginTop: 300,
  },
  currentBookContainer: {
    width: 115,
    height: 200,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  modalContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  exitButton: {
    alignItems: 'flex-end',
  },
  btnBookContainer: {
    width: '85%',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '80%',
  },
  selectedBookImage: {
    width: 80,
    height: 150,
  },
  bookClubContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  addNotesContainer: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop: 20,
    borderWidth: 1, 
    borderColor: 'grey', 
    borderRadius: 8, 
    padding: 5, 
  },
  titleWrapper: {
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
});
