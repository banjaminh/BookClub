import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./HomeStyleSheet";
import config from "../../config";
import gatherLatest from "../../apiCalls";

export default function Home() {
  console.log(gatherLatest())
  

  return(
    <View style={styles.homeContainer}>
      <Text>Home</Text>
    </View>
  )
}