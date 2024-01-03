import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
    // backgroundColor: '#EAB464',
    // height: '15%',
  },

  logoPicture:{
    width: 90,
    height: 60,
    marginLeft: 25,
    marginTop: Platform.OS === 'android' ? 100 : 10,

  },

  signInButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginRight: 25,
    // position: 'absolute',
    // top: 55,
    // right: 40,
  }
})
