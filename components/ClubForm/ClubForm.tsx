import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./ClubFormStyleSheet";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function ClubForm() {
  const [clubName, setClubName] = useState<string>('')
  
  function handleCreateClubPress() {
    const randomNumber = Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;
    const clubId = "#" + randomNumber
  }

  return (
    <View style={styles.clubFormContainer}>
      <Text style={{ display: "none" }}>Enter Club Name</Text>
        <View style={styles.clubInputWrapper}>
          <TextInput
            placeholder="Club Name"
            value={clubName}
            onChangeText={(text) => setClubName(text)}
            style={styles.clubNameInput}
			    />
        </View>
        <TouchableOpacity style={styles.createClubButton} onPress={handleCreateClubPress} >
          <Text  style={styles.createClubButtonTextColor}>Create My Club</Text>
        </TouchableOpacity>
    </View>
  )
}