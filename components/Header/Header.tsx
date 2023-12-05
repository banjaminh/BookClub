import { View, Text, Image } from "react-native";
import { styles } from "./HeaderStyleSheet";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image 
      style={{width: 90, height: 60, marginLeft: 25, marginTop: 100, marginBottom: 0, padding: 0}}
      source={require('../../assets/logo.png')}
      />
    </View>
  )
} 