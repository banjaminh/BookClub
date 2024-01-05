import { View, Text } from "react-native";
import { styles } from "./ClubPageStyleSheet";
import { BookClubInfo } from "../../types";

interface ClubPageProps {
  selectedClub: BookClubInfo
}

export default function ClubPage({selectedClub}: ClubPageProps) {
  return (
    <View>
      <Text>{selectedClub.bookClubName}</Text>
      <Text>{selectedClub.members}</Text>
      <Text>{selectedClub.groupProfilePicture}</Text>
      {/* <Text>{selectedClub.pastBooks}</Text> */}
      <Text>{selectedClub.nextInLine}</Text>
    </View>
  )
}