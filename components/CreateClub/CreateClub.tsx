import {
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import { styles } from "./CreateClubStyleSheet";
import { useNavigation } from "@react-navigation/native";
import ClubForm from "../ClubForm/ClubForm";

export default function CreateClub() {
const navigation = useNavigation();

  return (
    <View style={styles.createClubContainer}> 
        <View style={styles.internalNavigation}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DashBoard')}>
            <Text> ⬅️ Return to Your Clubs</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.createClubHeadingWrapper}>
          <Text style={styles.createClubHeading}>Create Club</Text>
        </View>
      <ClubForm />
    </View>
  )
} 