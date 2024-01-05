import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./BookClubStyleSheet";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { BookClubInfo } from "../../types";
import { allBookClubs } from "../../mockBookClubData";

export default function BookClub() {
	const navigation = useNavigation();
	const [bookClubs, setBookClubs] = useState<BookClubInfo[] >(allBookClubs)
  
	const bookClubCards = bookClubs?.map((club) => {
		return (

		<TouchableOpacity>
			<View style={styles.club}>	
				<Text style={styles.clubHeading}>{club.bookClubName}</Text>
			</View>
		</TouchableOpacity>
		)
	})
	// useEffect(() => {
	// 	if (allBookClubs.length > 0) {
	// 		setBookClubs([...allBookClubs, bookClubs])
	// 	}
	// }, [])

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
				{bookClubCards}
			</View>
		</View>
	);
}
