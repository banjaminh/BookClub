import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./HeaderStyleSheet";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native"; 

export default function Header() {

  
  const navigation = useNavigation();

  useEffect(() => {
    
    navigation.setOptions({
      headerTransparent: true, 
      headerTintColor: 'white',
    });
  }, [navigation]);
  
  return (
    <View style={styles.headerContainer}>
      <Image 
      style={styles.logoPicture}
      source={require('../../assets/logo.png')}
      />
      <TouchableOpacity style={styles.signInButton}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </View>
  )
} 