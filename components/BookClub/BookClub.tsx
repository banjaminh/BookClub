import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./BookClubStyleSheet";
import { useNavigation } from "@react-navigation/native";

export default function BookClub() {
	const navigation = useNavigation();
  
	return (
		<View style={styles.bookClubContainer}>
			<View style={styles.internalNavigation}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("CreateClub")}
				>
					<Text>Create</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("JoinClub")}
				>
					<Text>Join</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.heading}>Your Book Clubs:</Text>
			<View style={styles.allClubs}>
				<View style={styles.club}>
					<Text style={styles.clubHeading}>Book Club Groupies</Text>
				</View>
				<View style={styles.club}>
					<Text style={styles.clubHeading}>Reading Rabbits</Text>
				</View>
			</View>
		</View>
	);
}
