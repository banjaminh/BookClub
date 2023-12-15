import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './ExtandableUserNotesStyleSheet';
import { useState } from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { CurrentItem } from '../../types';
('../../types');

interface ExpandableUserNotesProps {
  item: CurrentItem;
}

interface UserNote {
  date: string;
  comment: string;
}

export default function ExpandableUserNotes({
  item,
}: ExpandableUserNotesProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const animatedStyle = useAnimatedStyle(() => {
    const animatedHeight = expanded ? withTiming(100) : withTiming(0);

    return {
      height: animatedHeight,
    };
  });

  const onNotesPress = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={onNotesPress}>
        <View style={styles.notes}>
          <Text>{item.notes_title}</Text>
        </View>
      </TouchableOpacity>

      <Animated.View style={animatedStyle}>
        {item.user_notes.map((userNote: UserNote, index: number) => (
          <View key={index}>
            <Text>{`${userNote.date} ${userNote.comment}`}</Text>
          </View>
        ))}
      </Animated.View>
    </View>
  );
}
