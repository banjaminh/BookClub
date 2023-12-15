import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from './components/DashBoard/DashBoard';
import CreateClub from './components/CreateClub/CreateClub';
import BookClub from './components/BookClub/BookClub';
import JoinClub from './components/JoinClub/JoinClub';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='DashBoard' component={DashBoard} />
          <Stack.Screen name='CreateClub' component={CreateClub} />
          <Stack.Screen name='BookClub' component={BookClub} />
          <Stack.Screen name='JoinClub' component={JoinClub} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

