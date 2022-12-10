import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import SearchRestaurant from './components/SearchRestaurant';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from './components/Test';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchRestaurant} />
        <Stack.Screen name="Test" component={Test} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

