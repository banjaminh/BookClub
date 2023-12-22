import { FlatList, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { styles } from "./BookResultsViewStyleSheet";
import { Book } from "../../types";

interface BookResultsViewProps {
  bookResults: Book[],
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectedBook: React.Dispatch<React.SetStateAction<Book | null>>,
  isModalVisible: boolean,
  toggleModal: (item: Book) => void
}

export default function BookResultsView({bookResults, toggleModal, setSelectedBook, setModalVisible, isModalVisible} : BookResultsViewProps) {
  
  const renderItem = ({item} : {item: Book}) => ( 
    <TouchableWithoutFeedback onPress={() => toggleModal(item)}> 

      <View style={styles.individualFlatListItem}> 
    {/* <TouchableOpacity onPress={() => toggleModal(item)}> */}
    
        <Image 
          style={styles.bookImage}
          source={{uri: item.book_image}}
        />
        <Text style={styles.bookTitle}>{item.title}</Text>
    {/* </TouchableOpacity> */}
      </View>
    </TouchableWithoutFeedback>
  )

  return (
    <View style={styles.bookResultsViewContainer}>
      <FlatList 
        data={bookResults}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  )
}