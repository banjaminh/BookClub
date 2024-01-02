import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Book } from '../../types';
import { styles } from './BookModalStyleSheet'; 
import BuyButtons from '../BuyButtons/BuyButtons';

interface BookModalProps {
  selectedBook: Book | null,
  isModalVisible: boolean,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}
export default function BookModal({selectedBook, isModalVisible, setModalVisible}: BookModalProps) {
  return (
    <Modal
    animationType='slide'
    transparent={true}
    visible={isModalVisible}
    onRequestClose={() => setModalVisible(false)}
    >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>

          <>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalClose}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{selectedBook?.title}</Text>
            <Image
              style={styles.bookImage}
              source={{
                uri: selectedBook?.book_image,
              }}
              resizeMode='cover'
            />
            <Text style={styles.modalBookText}>
              Author: {selectedBook?.author}
            </Text>
            <Text style={styles.modalBookText}>Genre: Fiction</Text>
            <Text style={styles.modalBookDescription}>
              {selectedBook?.description}
            </Text>

            <View>
              <BuyButtons selectedBook={selectedBook} />
            </View>
            
          </>

      </View>
    </View>
    </Modal>
  )
}