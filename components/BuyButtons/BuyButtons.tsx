import { View, TouchableOpacity, Text, Animated } from "react-native";
import { styles } from "./BuyButtonsStyleSheet";
import { useState } from "react";

export default function BuyButtons() {
  const [showButtons, setShowButtons] = useState<boolean>(false)
  const [amazon] = useState(new Animated.Value(0))
  


  const openMenu = () => {
    Animated.timing(amazon, {
      toValue: -60,
      duration: 500,
      useNativeDriver: false
    }).start();
    console.log('potato')
  }

  const closeMenu = () => {
    console.log('close menu')
    Animated.timing(amazon, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start();
  }

  return (
    <View style={styles.buyButtonContainer}>
      <Animated.View style={[styles.modalBuyButton, {bottom: amazon}]} >
      <TouchableOpacity onPress={() => handleAmazonPress()}>
        <Text>Amazon</Text>
      </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity style={styles.modalBuyButton} onPress={() => {
        !showButtons ? (() => { 
          setShowButtons(true)
          openMenu()})() : ( () => {
          setShowButtons(false) 
          closeMenu() })()
      }}>
        <Text>Click to Buy</Text>
      </TouchableOpacity>
    </View>
  )
}