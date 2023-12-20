import { View, Text, TouchableOpacity, LayoutChangeEvent } from 'react-native';
import { styles } from './ExtandableUserNotesStyleSheet';
import { useState } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { CurrentItem } from '../../types';

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
  const [height, setHeight] = useState(0);
  const animatedHeight = useSharedValue(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const onLayoutHeight = event.nativeEvent.layout.height;
  
    if (onLayoutHeight > 0 && height !== onLayoutHeight) {
      setHeight(onLayoutHeight);
    }
  };

  const collapsableStyle = useAnimatedStyle(() => {
    animatedHeight.value = expanded ? withTiming(height) : withTiming(0);
  
    return {
      height: animatedHeight.value,
    };
  }, [expanded, height]);

  // const animatedStyle = useAnimatedStyle(() => {
  //   const animatedHeight = expanded ? withTiming(height) : withTiming(0);
  //   return {
  //     height: animatedHeight,
  //   };
  // });

  const onNotesPress = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.commentWrapper}>

      <TouchableOpacity onPress={onNotesPress}>
        <View style={styles.noteTitle}>
          <Text>{item.notes_title}</Text>
        </View>
      </TouchableOpacity>

      <Animated.View style={[collapsableStyle]}>
        <View onLayout={onLayout} >
        {item.user_notes.map((userNote: UserNote, index: number) => (
          <View key={index} style={[styles.userNotesStyle]} >
            <Text><Text style={styles.dateStyle}>{`${userNote.date}:`}</Text>{` ${userNote.comment}`}</Text>
          </View>
        ))}
        </View>
      </Animated.View>
    </View>
  );
}
