import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  commentWrapper: {
    width: '97%',
    padding: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    backgroundColor: 'white',
    margin: 5,
  },
  notes: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'grey',
    // borderRadius: 8,
    // width: 350,
    // padding: 5,
  },
  noteTitle: {
    alignItems: 'center',
  },
  userNotesStyle: {
    marginVertical: 7,
    // marginBottom: 5,
    // width: '95%',
    // marginLeft: 10,
    // borderWidth: 1,
    // borderColor: 'grey',
  },
  dateStyle: {
    fontWeight: 'bold',
  },
});
