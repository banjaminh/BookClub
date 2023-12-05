import { View, Text, Image } from "react-native";
// import { styles } from "./HeaderStyleSheet";

export default function Header() {
  return (
    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', marginTop: 60, backgroundColor: '#EAB464'}}>
      <Image 
      style={{width: 90, height: 60, marginLeft: 25}}
      source={require('../../assets/logo.png')}
      />
      <Text>Book Club</Text>
    </View>
  )
} 