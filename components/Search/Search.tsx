import {
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	TextInput,
} from "react-native";
import { styles } from "./SearchStyleSheet";
import { useState } from "react";
import { bookTypes } from "../../list_names";

export default function Search() {
	const [input, setInput] = useState<string>("");
	const [suggestions, setSuggestions] = useState<string[]>([]);

  function searchBookTypes(searchInput: string){
    const results = bookTypes.filter(type => { 
      const splitArray = type.split(' ');
      const isTrue = splitArray.some(split => split.toLowerCase().startsWith(searchInput.toLowerCase()));
      return isTrue;
      
    })
    return results
  }

	function createSuggestions(searchText: string) {

  }
  searchBookTypes("nonfiction")
	function onChangeText(text: string) {
		setInput(text);
	}

	return (
		<View style={styles.searchContainer}>
			<Text>Search</Text>
			<TextInput
				placeholder="Book Type"
				value={input}
				onChangeText={onChangeText}
				style={styles.searchInput}
			/>
		</View>
	);
}
