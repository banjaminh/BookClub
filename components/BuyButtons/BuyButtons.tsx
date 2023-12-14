import { View, TouchableOpacity, Text, Animated, Linking } from 'react-native';
import { styles } from './BuyButtonsStyleSheet';
import { useState, useRef } from 'react';
import { Book } from '../../types';

interface BuyButtonsProps {
  selectedBook: Book | null;
}

export default function BuyButtons({ selectedBook }: BuyButtonsProps) {
  const [showButtons, setShowButtons] = useState<boolean>(false);
  // const [store1] = useState(new Animated.Value(0));
  // const [store2] = useState(new Animated.Value(0));
  // const [store3] = useState(new Animated.Value(0));



// const stores = Array.from({ length: 3 }, (_, index) => new Animated.Value(0));
// const stores = Array.from({ length: 3 }, () => new Animated.Value(0));
const stores = useRef(Array.from({ length: 3 }, () => new Animated.Value(0))).current;
const openMenu = () => {
  stores.forEach((store, index) => {
    Animated.timing(store, {
      toValue: (index + 1) * 49,
      duration: 500,
      useNativeDriver: false,
    }).start();
  });
};

const closeMenu = () => {
  stores.forEach((store) => {
    Animated.timing(store, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  });
};

  // const openMenu = () => {
  //   Animated.timing(store1, {
  //     toValue: 48,
  //     duration: 500,
  //     useNativeDriver: false,
  //   }).start();
  //   Animated.timing(store2, {
  //     toValue: 97,
  //     duration: 500,
  //     useNativeDriver: false,
  //   }).start();
  //   Animated.timing(store3, {
  //     toValue: 146,
  //     duration: 500,
  //     useNativeDriver: false,
  //   }).start();
  // };

  // const closeMenu = () => {
  //   Animated.timing(store1, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: false,
  //   }).start();
  //   Animated.timing(store2, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: false,
  //   }).start();
  //   Animated.timing(store3, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: false,
  //   }).start();
  // };

  // const buttons = selectedBook?.buy_links.slice(0, 2).map((link, index) => {
  //   let store: Animated.Value = `store${index + 1}`;
  //   return (
  //     <Animated.View style={[styles.modalBuyButton, { bottom: store }]}>
  //       <TouchableOpacity onPress={() => handleStore1Press()}>
  //         <Text>Amazon</Text>
  //       </TouchableOpacity>
  //     </Animated.View>
  //   );
  // });

  const buttons = selectedBook?.buy_links.slice(0, 3).map((link, index) => {
    const store = stores[index];
    return (
      <Animated.View
        key={index}
        style={[
          styles.modalBuyButton,
          { bottom: store},
        ]}
      >
        <TouchableOpacity onPress={() => handlePress(link.url)}>
          <Text>{link.name}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  });

	const handlePress = (purchaseLink: string) => {
		Linking.openURL(purchaseLink).catch((err) => console.error(err));
	};
  
  return (
    <View style={styles.buyButtonContainer}>
      {buttons}
      {/* <Animated.View style={[styles.modalBuyButton, { bottom: store1 }]}>
        <TouchableOpacity onPress={() => handleStore1Press()}>
          <Text>Amazon</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.modalBuyButton, { bottom: store2 }]}>
        <TouchableOpacity onPress={() => handleStore2Press()}>
          <Text>Apple Books</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.modalBuyButton, { bottom: store3 }]}>
        <TouchableOpacity onPress={() => handleStore3Press()}>
          <Text>Barns & Noble</Text>
        </TouchableOpacity>
      </Animated.View> */}
      <TouchableOpacity
        style={styles.modalBuyButton}
        onPress={() => {
          !showButtons
            ? (() => {
                setShowButtons(true);
                openMenu();
              })()
            : (() => {
                setShowButtons(false);
                closeMenu();
              })();
        }}
      >
        <Text>Click to Buy</Text>
      </TouchableOpacity>
    </View>
  );
}
