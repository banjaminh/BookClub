import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
})