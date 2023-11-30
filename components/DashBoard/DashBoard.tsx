import { Text, View, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

export default function DashBoard(){

  const dashboard = (
    <Tab.Navigator
      initialRouteName={'home'}
    >
      <Tab.Screen
        name='home'
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name='current'
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name='search'
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name='bookclub'
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );

  return dashboard;
}