import { bookData } from './testData';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { styles } from './BookScrollViewStyleSheet';
import { Book } from '../../types';
import BuyButtons from '../BuyButtons/BuyButtons';
import BookModal from '../BookModal/BookModal';

export default function BookScrollView() {
  const [books, setBooks] = useState<Book[]>(bookData.results.books);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = (item: Book) => {
    setSelectedBook(item);
    setModalVisible(!isModalVisible);
  };

  const handlePress = (purchaseLink: string) => {
    Linking.openURL(purchaseLink).catch((err) => console.error(err));
  };

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress={() => toggleModal(item)}>
      <View style={styles.bookContainer}>
        <Image
          style={styles.bookImage}
          source={{
            uri: item.book_image,
          }}
          resizeMode='cover'
        />
        <Text style={styles.bookTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList 
        data={books} 
        renderItem={renderItem} 
        horizontal={true} 
      />
      <BookModal selectedBook={selectedBook} setModalVisible={setModalVisible} isModalVisible={isModalVisible}/>
      
    </View>
  );
}
