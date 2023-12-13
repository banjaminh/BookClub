import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  buyButtonContainer: {
    
    alignItems: 'center',
    justifyContent: 'center',
    width: 290,
    height: 50,
    borderWidth: 2, // border width
    borderColor: 'black', // border color
    borderRadius: 10, 
  },

  modalBuyButton: {
    backgroundColor: '#ff9900',
    // paddingVertical: 10,
    // paddingHorizontal: 5,
    width: 290,
    height: 50,
    position: 'absolute',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})