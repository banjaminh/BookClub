import { View, Text, Modal, TouchableOpacity } from "react-native";
import { styles } from "./ClubPageModalStyleSheet";
import { BookClubInfo } from "../../types";

interface ClubPageProps {
	selectedClub: BookClubInfo | null;
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
	isModalVisible: boolean;
}

export default function ClubPageModal({
	selectedClub,
	isModalVisible,
	setIsModalVisible,
}: ClubPageProps) {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={isModalVisible}
			onRequestClose={() => setIsModalVisible(false)}
		>
			<View style={styles.modalContainer}>
				<Text>{selectedClub?.bookClubName}</Text>
				<Text>{selectedClub?.members}</Text>
				<Text>{selectedClub?.groupProfilePicture}</Text>
				{/* <Text>{selectedClub.pastBooks}</Text> */}
				<Text>{selectedClub?.nextInLine}</Text>
				<TouchableOpacity onPress={() => setIsModalVisible(false)}>
					<Text>X</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
}
