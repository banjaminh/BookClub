import { bookData } from "./testData";
import { useState, useEffect } from "react";
import {
	View,
	Text,
	FlatList,
	Image,
	Modal,
	TouchableOpacity,
} from "react-native";
import { styles } from "./BookScrollViewStyleSheet.tsx";

export default function BookScrollView() {
	const [books, setBooks] = useState(bookData.results.books);
	const [selectedBook, setSelectedBook] = useState(null);
	const [isModalVisible, setModalVisible] = useState(false);
	

	const toggleModal = (item) => {
		setSelectedBook(item);
		setModalVisible(!isModalVisible);
	};
	const renderItem = ({ item }) => (
		<TouchableOpacity onPress={() => toggleModal(item)}>
			<View style={styles.bookContainer}>
				<Image
					style={styles.bookImage}
					source={{
						uri: item.book_image,
					}}
					resizeMode="cover"
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

			<Modal
				animationType="slide"
				transparent={true}
				visible={isModalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						{selectedBook && (
							<>
								<Text style={styles.modalTitle}>{selectedBook.title}</Text>
								<Image
									style={styles.bookImage}
									source={{
										uri: selectedBook.book_image,
									}}
									resizeMode="cover"
								/>
								<Text>Author: {selectedBook.author}</Text>
								<Text>Genre: Fiction</Text>

								<Text>{selectedBook.description}</Text>

								<TouchableOpacity onPress={() => setModalVisible(false)}>
									<Text style={styles.modalClose}>Close</Text>
								</TouchableOpacity>
							</>
						)}
					</View>
				</View>
			</Modal>
		</View>
	);
}
