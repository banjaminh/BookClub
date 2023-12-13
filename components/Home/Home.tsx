import { View, Image, Text } from 'react-native'
import { styles } from './HomeStyleSheet'
import { useEffect } from "react";
import BookScrollView from "../BookScrollView/BookScrollView";
import {
  useFonts,
  Roboto_700Bold,
} from "@expo-google-fonts/dev";
// import { gatherLatest } from "../../apiCalls"

	// useEffect(() => {
	//   const fetchData = async () => {
	//     try {
	//       const info = await gatherLatest()
	//       console.log(info)
	//     } catch(error) {
	//       console.log(error)
	//     }
	//   }

	//   fetchData()
	// }, [])

export default function Home() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
  });

  return (
    <View style={styles.homeContainer}>
      <Image
        style={styles.homeImage}
        source={require('../../assets/bubble.png')}
        accessibilityLabel={'Image of text bubbles stating: read, connect, discuss, discover.'}
      />
      <Text style={{
         justifyContent: 'center',
         alignItems: 'center',
         textAlign:"center",
         backgroundColor: '#EAB464',  
         width: '95%',
         padding: 10,
         fontFamily: "Roboto_700Bold",
         fontSize: 16,
      }}>Titles In the Spotlight:</Text>
      <View style={styles.scrollContainer}>
				<BookScrollView />
			</View>
    </View>
  )

}
