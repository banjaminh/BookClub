import { Text, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Current from '../Current/Current';
import Search from '../Search/Search';
import BookClub from '../BookClub/BookClub';
import Header from '../Header/Header'

const Tab = createBottomTabNavigator()

export default function DashBoard(){

  const dashboard = (
    <Tab.Navigator
      initialRouteName={'home'}
    >
      <Tab.Screen
        name='home'
        component={Home}
        options={{header: () => <Header />,
        headerStyle: {
          backgroundColor: '#EAB464',
        }, tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ), }}
      />
      <Tab.Screen
        name='current'
        component={Current}
        options={{header: () => <Header />,
        headerStyle: {
          backgroundColor: '#EAB464',
        }, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-blank-variant" size={size} color={color}/>
          ) }}
      />

      <Tab.Screen
        name='search'
        component={Search}
        options={{header: () => <Header />,
        headerStyle: {
          backgroundColor: '#EAB464',
        }, tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          ) }}
      />

      <Tab.Screen
        name='bookclub'
        component={BookClub}
        options={{header: () => <Header />,
        headerStyle: {
          backgroundColor: '#EAB464',
        }, tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ) }}
      />
    </Tab.Navigator>
  );

  return dashboard;
}