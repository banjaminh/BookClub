import { View, Text } from "react-native";
import { useEffect } from "react";
import { styles } from "./HomeStyleSheet";
// import { gatherLatest } from "../../apiCalls"

export default function Home() {

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

  return(
    <View style={styles.homeContainer}>
      <Text>Home</Text>
    </View>
  )
}