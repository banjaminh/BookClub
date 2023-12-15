import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bookClubContainer: {
    flex: 1,
    marginTop: 80,
  },
  internalNavigation: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#EAB464',
    marginRight: 20,
    borderRadius: 10,
  },
  heading: {
    marginTop: 40,
    marginBottom: 20,
    paddingLeft: 10,
  },
  allClubs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 20,
  },
  club: {
    alignItems: 'center',
    borderColor: '#C84630',
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 150,
    height: 200,
  },
  clubHeading: {
    marginTop: 10,
  }
})