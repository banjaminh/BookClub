import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    position: 'relative',

    paddingTop: Platform.OS === 'android' ? 25 : 0
  },

  scrollContainer:{
    marginTop: 200,
    // marginLeft: 25,
  }

})