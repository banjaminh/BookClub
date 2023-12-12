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
      style={{width: 90, height: 60, marginLeft: 25, marginTop: 100,}}
      source={require('../../assets/logo.png')}
      />
      <TouchableOpacity style={styles.signInButton}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </View>
  )
} 