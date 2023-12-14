import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './CurrentStyleSheet';
import { bookData } from '../BookScrollView/testData';
import { Book } from '../../types';
import { useState } from 'react';
import { allBookClubs } from '../../mockBookClubData';

export default function Current() {
  const [books, setBooks] = useState<Book[]>(bookData.results.books);
  const [currentBooks, setCurrentBooks] = useState<Book[]>([
    bookData.results.books[5],
    bookData.results.books[6],
  ]);

  const [currentClub, setCurrentClub] = useState<string>('Reading Rabbits');
const toggleModal = () => {
  console.log('I was clicked ')
}
  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity onPress = {() => toggleModal()}>
      <Image
        style={styles.bookImage}
        source={{
          uri: item.book_image,
        }}
        resizeMode='cover'
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.currentContainer}>
      <Text>Club: {currentClub}</Text>
      <Text>Currently Reading</Text>
      <FlatList 
        data={currentBooks} 
        renderItem={renderItem} 
        horizontal={true} 
      />
    </View>
  );
}
