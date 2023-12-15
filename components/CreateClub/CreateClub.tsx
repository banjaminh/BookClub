import {
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import { styles } from "./CreateClubStyleSheet";
import { useNavigation } from "@react-navigation/native";

export default function CreateClub() {
const navigation = useNavigation();

  return (
    <View style={styles.createClubContainer}> 
        <View style={styles.internalNavigation}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookClub')}>
            <Text> ⬅️ Return to Your Clubs</Text>
            </TouchableOpacity>
        </View>
      <Text style={styles.heading}>Create a Club:</Text>
    </View>
  )
} 