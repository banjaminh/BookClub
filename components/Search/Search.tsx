import {
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	TextInput,
	FlatList,
	Pressable,
	TouchableOpacity,
} from "react-native";
import { styles } from "./SearchStyleSheet";
import { useState } from "react";
import { bookTypes } from "../../list_names";
import { fetchByGenre } from "../../apiCalls";
import BookResultsView from "../BookResultsView/BookResultsView";
import { Book } from "../../types";
import BookModal from "../BookModal/BookModal";

export default function Search() {
	const [input, setInput] = useState<string>("");
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
	const [searchType, setSearchType] = useState<string>("title");
	const [bookResults, setBookResults] = useState<Book[] | null>(null)
	const [isModalVisible, setModalVisible] = useState<boolean>(false);
	const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const toggleModal = (item: Book) => {
    setSelectedBook(item);
    setModalVisible(!isModalVisible);
  };
  


	function searchBookTypes(searchInput: string) {
		const results = bookTypes.filter((type) => {
			const splitArray = type.split(" ");
			const isTrue = splitArray.some((split) =>
				split.toLowerCase().startsWith(searchInput.toLowerCase())
			);
			return isTrue;
		});

		setSuggestions(results);
	}

		const getGenre = async () => {
			try {
				console.log('selectedSuggestion @ in getGenre', input)
				const genreType = await fetchByGenre(input);
				console.log('genreType', genreType)
		, setBookResults(genreType.results.books)
			} catch (error) {
				console.log(error)
			}
		}

	const handleSearchPress = () => {
		setShowSuggestions(false)
		getGenre()
		setInput('')
		setSuggestions([])
	}

	function renderItem({ item }: { item: string }) {
			return (
				<TouchableOpacity onPress={() => setInput(item)} style={styles.suggestions}>
					<View style={{ padding: 15 }}>
						<Text>{item}</Text>
					</View>
				</TouchableOpacity>
			) 
	}

	function closeSuggestions() {
		setShowSuggestions(false);
	}

	function onChangeText(text: string) {
	 setBookResults(null)
		setInput(text);
		if (text.length > 1) {
			setShowSuggestions(true);
		} else {
			setShowSuggestions(false);
		}
		searchBookTypes(text);
	}

	function renderNoResults() {
		return (
			<View style={styles.suggestions}>
				<View style={{ padding: 15 }}>
					<Text>No matching genre...</Text>
				</View>
			</View>
		);
	}

	return (
		<View style={styles.searchContainer}>
			<View style={styles.searchTypeContainer}>
				<TouchableOpacity
					style={[
						styles.typeButton,
						searchType === "title" && styles.selectedButton,
					]}
					onPress={() => setSearchType("title")}
				>
					<Text>Title</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.typeButton,
						searchType === "author" && styles.selectedButton,
					]}
					onPress={() => setSearchType("author")}
				>
					<Text>Author</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.typeButton,
						searchType === "genre" && styles.selectedButton,
					]}
					onPress={() => setSearchType("genre")}
				>
					<Text>Genre</Text>
				</TouchableOpacity>
			</View>
			<TouchableWithoutFeedback onPress={closeSuggestions}>
				<View style={styles.inputContainer}>
					<Text style={{ display: "none" }}>Search</Text>
					<View style={styles.inputWithButton}>
						<TextInput
							placeholder="Book Type"
							value={input}
							onChangeText={onChangeText}
							style={styles.searchInput}
						/>
						<TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
							<Text>Search</Text>
						</TouchableOpacity>
					</View>
					{showSuggestions && searchType === "genre" && (
						<FlatList
							data={suggestions}
							renderItem={(item) =>
								item ? renderItem(item) : renderNoResults()
							}
              ListEmptyComponent={renderNoResults}
						/>
					)}
				</View>
			</TouchableWithoutFeedback>
			{bookResults && <BookResultsView toggleModal={toggleModal} setModalVisible={setModalVisible} isModalVisible={isModalVisible} setSelectedBook={setSelectedBook} bookResults={bookResults}/>}
			<BookModal selectedBook={selectedBook} isModalVisible={isModalVisible} setModalVisible={setModalVisible}/>
		</View>
	);
}
