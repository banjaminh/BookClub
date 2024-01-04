import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  clubFormContainer: {
    flex: .75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clubInputWrapper: {
    width: '75%',
    marginBottom: '10%',
  },
  clubNameInput: {
    borderWidth: 1.5,
    borderRadius: 10,
    height: 50,
    fontSize: 25,
    paddingLeft: 10
  },
  createClubButton: {
    borderWidth: 1.5,
    borderRadius: 25,
    height: 50,
    fontSize: 25,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  createClubButtonTextColor: {
    color: 'white',
    fontSize: 16
  }
})
