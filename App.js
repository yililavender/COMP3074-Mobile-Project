import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// You can import from local files
import HomeScreen from './components/HomeScreen';
import FavoriteScreen from './components/MyFavorites';
import RateScreen from './components/RateRestaurants';
import VisitsScreen from './components/RestaurantVisited';
import AboutScreen from './components/About'
import DetailScreen from './components/DetailScreen';
import SearchScreen from './components/SearchRestaurants';
import Add from './components/Add';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="My Favorites" component={FavoriteScreen}/>
        <Stack.Screen name="Rate Restaurants" component={RateScreen}/>
        <Stack.Screen name="Restaurant Visited" component={VisitsScreen}/>
        <Stack.Screen name="About Us" component={AboutScreen}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen name="Details" component={DetailScreen}/>
        <Stack.Screen name="Add" component={Add}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
