import { bookData } from "./testData";
import { useState, useEffect } from "react";
import {
	View,
	Text,
	FlatList,
	Image,
	Modal,
	TouchableOpacity,
	Linking,
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

	const handlePress = (purchaseLink) => {
		Linking.openURL(purchaseLink).catch((err) => console.error(err))
	}
	
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
								<TouchableOpacity onPress={() => setModalVisible(false)}>
									<Text style={styles.modalClose}>X</Text>
								</TouchableOpacity>
								<Text style={styles.modalTitle}>{selectedBook.title}</Text>
								<Image
									style={styles.bookImage}
									source={{
										uri: selectedBook.book_image,
									}}
									resizeMode="cover"
								/>
								<Text style={styles.modalBookText}>Author: {selectedBook.author}</Text>
								<Text style={styles.modalBookText}>Genre: Fiction</Text>
								<Text style={styles.modalBookDescription}>{selectedBook.description}</Text>
								
								<TouchableOpacity style={styles.modalBuyButton} onPress={() => handlePress(selectedBook.amazon_product_url)}>
									<Text>Click to Buy</Text>
								</TouchableOpacity>
							</>
						)}
					</View>
				</View>
			</Modal>
		</View>
	);
}
