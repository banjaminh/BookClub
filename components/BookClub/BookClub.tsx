import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./BookClubStyleSheet";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { BookClubInfo } from "../../types";
import { allBookClubs } from "../../mockBookClubData";
import ClubPageModal from "../ClubPageModal/ClubPageModal";

export default function BookClub() {
	const navigation = useNavigation();
	const [bookClubs, setBookClubs] = useState<BookClubInfo[] >(allBookClubs)
	const [selectedClub, setSelectedClub] = useState<BookClubInfo | null>(null);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	
	function handleClubSelect(club : BookClubInfo){
		setSelectedClub(club);
		setIsModalVisible(true);
	}
	
	
	const bookClubCards = bookClubs?.map((club) => {
		return (

		<TouchableOpacity key={club.id} onPress={() => handleClubSelect(club)}>
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
			<ClubPageModal isModalVisible={isModalVisible} selectedClub={selectedClub} setIsModalVisible={setIsModalVisible} />
		</View>
	);
}
