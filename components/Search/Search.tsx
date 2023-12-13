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

export default function Search() {
	const [input, setInput] = useState<string>("");
	const [suggestions, setSuggestions] = useState<string[]>([]);
	const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

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

	function renderItem({ item }: { item: string }) {
		return (
			<Pressable onPress={() => setInput(item)} style={styles.suggestions}>
				<View style={{ padding: 15 }}>
					<Text>{item}</Text>
				</View>
			</Pressable>
		);
	}

	function closeSuggestions() {
		setShowSuggestions(false);
	}

	
	function onChangeText(text: string) {
		setInput(text);
		if (text.length > 1) {
			setShowSuggestions(true);
		} else {
			setShowSuggestions(false);
		}
		searchBookTypes(text);
	}

	return (
		<View style={styles.searchContainer}>
			<TouchableWithoutFeedback onPress={closeSuggestions}>
				<View style={styles.inputContainer}>
          <Text style={{display: 'none'}}>Search</Text>
          <View style={styles.inputWithButton}>
					<TextInput
						placeholder="Book Type"
						value={input}
						onChangeText={onChangeText}
						style={styles.searchInput}
					/>
          <TouchableOpacity style={styles.searchButton}>
            <Text>Search</Text>
            </TouchableOpacity>
          </View>
					{showSuggestions && (
						<FlatList data={suggestions} renderItem={renderItem} />
					)}
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
}
