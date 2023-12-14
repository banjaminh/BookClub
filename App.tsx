import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DashBoard from './components/DashBoard/DashBoard'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  const Stack = createStackNavigator()

  return (
  
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='DashBoard' component={DashBoard} />
        </Stack.Navigator>
      </NavigationContainer>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Platform.OS === 'android' ? 25 : 0
  }
})
