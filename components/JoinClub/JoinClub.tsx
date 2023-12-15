import {
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import { styles } from "./JoinClubStyleSheet";
import { useNavigation } from "@react-navigation/native";

export default function JoinClub() {
const navigation = useNavigation();

  return (
    <View style={styles.joinClubContainer}> 
        <View style={styles.internalNavigation}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DashBoard')}>
            <Text> ⬅️ Return to Your Clubs</Text>
            </TouchableOpacity>
        </View>
      <Text style={styles.heading}>Join a Club:</Text>
    </View>
  )
} 