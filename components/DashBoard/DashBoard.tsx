import { Text, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';

const Tab = createBottomTabNavigator()

export default function DashBoard(){

  const dashboard = (
    <Tab.Navigator
      initialRouteName={'home'}
    >
      <Tab.Screen
        name='home'
        component={Home}
        options={{ headerShown: false, tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ), }}
      />

      {/* <Tab.Screen
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
      /> */}
    </Tab.Navigator>
  );

  return dashboard;
}