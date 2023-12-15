import { FlatList, View, Text, Image } from "react-native";
import { styles } from "./SelectedGenreViewStyleSheet";
import { Book } from "../../types";

interface SelectedGenreViewProps {
  selectedGenre: Book[]
}

export default function SelectedGenreView({selectedGenre} : SelectedGenreViewProps) {
  const renderItem = ({item} : {item: Book}) => ( 
    <View style={styles.individualFlatListItem}>
      <Image 
        style={styles.bookImage}
        source={{uri: item.book_image}}
      />
      <Text style={styles.bookTitle}>{item.title}</Text>
    </View>
  )

  return (
    <View style={styles.selectedGenreViewContainer}>
      <FlatList 
        data={selectedGenre}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  )
}