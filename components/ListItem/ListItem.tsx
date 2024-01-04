import { useState } from "react";
import { View, TouchableWithoutFeedback, Image, Text } from "react-native";
import { CollapsableContainer } from "../CollapsableContainer/CollapsableContainer";
import { styles } from "./ListItemStyleSheet";
import { CurrentItem } from "../../types";

interface ExpandableUserNotesProps {
	item: CurrentItem;
}

interface UserNote {
	date: string;
	comment: string;
}

export const ListItem = ({ item }: { item: ListItemType }) => {
	const [expanded, setExpanded] = useState(false);
    console.log("ITEM", item)
	const onItemPress = () => {
		setExpanded(!expanded);
	};

    const notes = item.user_notes.map((userNote: UserNote, index: number) => (
        <View key={index} style={[styles.userNotesStyle]} >
          <Text><Text style={styles.dateStyle}>{`${userNote.date}:`}</Text>{` ${userNote.comment}`}</Text>
        </View>
      ))

	return (
		<View style={styles.wrap}>
			<TouchableWithoutFeedback onPress={onItemPress}>
				<View style={styles.container}>
					{/* <Image source={{ uri: item.image }} style={styles.image} /> */}
					<View style={styles.textContainer}>
						<Text style={styles.text}>{item.notes_title}</Text>
						{/* <Text style={styles.text}>{item.subtitle}</Text> */}
					</View>
				</View>
			</TouchableWithoutFeedback>
			<CollapsableContainer expanded={expanded}>
				{notes}
			</CollapsableContainer>
		</View>
	);
};
