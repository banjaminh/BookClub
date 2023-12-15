import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import { styles } from './CurrentStyleSheet';
import { bookData } from '../BookScrollView/testData';
import { Book } from '../../types';
import { useState } from 'react';
import { userNotes } from './MockUserNotes';
import ExpandableUserNotes from '../ExpandableUserNotes/ExpandableUserNotes';

import { CurrentItem } from '../../types';
('../../types');

export default function Current() {
  const [currentBooks, setCurrentBooks] = useState<Book[]>([
    bookData.results.books[5],
    bookData.results.books[6],
    bookData.results.books[3],
  ]);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const toggleModal = (item: Book) => {
    setModalVisible(!isModalVisible);
    setSelectedBook(item);
  };

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress={() => toggleModal(item)}>
      <View style={styles.currentBookContainer}>
        <Image
          style={styles.bookImage}
          source={{
            uri: item.book_image,
          }}
          resizeMode='cover'
        />
      </View>
    </TouchableOpacity>
  );

  const handleAddNotes = () => {
    console.log('add notes');
  };

  const renderItem2 = (item: CurrentItem) => {
    return <ExpandableUserNotes item={item} />;
  };

  return (
    <View style={styles.currentContainer}>
      <View style={styles.flatListTitle}>
        <Text>Currently Reading</Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={currentBooks}
          renderItem={renderItem}
          horizontal={true}
        />
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.btnBookContainer}>
            <Image
              style={styles.selectedBookImage}
              source={{
                uri: selectedBook?.book_image,
              }}
              resizeMode='cover'
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View style={styles.exitButton}>
                  <Text>X</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.bookClubContainer}>
                <Text style={styles.titleWrapper}>{selectedBook?.title}</Text>
                <Text>Book Club: Reading Rabbits</Text>
                <View style={styles.addNotesContainer}>
                  <TouchableOpacity onPress={handleAddNotes}>
                    <Text>Add Notes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.commentContainer}>
            <FlatList
              data={userNotes.book_1.notes}
              renderItem={({ item }) => renderItem2(item)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
