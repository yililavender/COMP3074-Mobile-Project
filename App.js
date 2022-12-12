import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage';

// You can import from local files
import HomeScreen from './components/HomeScreen';
import FavoriteScreen from './components/MyFavorites';
import RateScreen from './components/RateRestaurants';
import ListScreen from './components/RestaurantList';
import AboutScreen from './components/About'
import DetailScreen from './components/DetailScreen';
import SearchScreen from './components/SearchRestaurants';
import Add from './components/Add';
import ButtonComponent from './components/components/ButtonComponent';
import FormInput from './components/components/FormInput';
import RestaurantFavorite from './components/components/RestaurantFavorite';
import RestaurantList from './components/components/RestaurantList';
import KFC from './components/assets/Kfc_logo.png';
import McDonald from './components/assets/McDonalds.png';
import PizzaHut from './components/assets/Pizza-Hut-logo.jpeg';
import PizzaPizza from './components/assets/pizza-pizza-logo.png';

const DATA = []

const Stack = createStackNavigator();

export default function App() {
 
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('data', JSON.stringify(DATA))
    } catch (e) {
      console.log(e)
    }
  }

  React.useEffect(() => {storeData()})

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="My Favorites" component={FavoriteScreen}/>
        <Stack.Screen name="Rate Restaurants" component={RateScreen}/>
        <Stack.Screen name="My Restaurant List" component={ListScreen}/>
        <Stack.Screen name="About Us" component={AboutScreen}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen name="Details" component={DetailScreen}/>
        <Stack.Screen name="Add" component={Add}/>
        <Stack.Screen name="ButtonComponent" component={ButtonComponent}/>
        <Stack.Screen name="FormInput" component={FormInput}/>
        <Stack.Screen name="RestaurantFavorite" component={RestaurantFavorite}/>
        <Stack.Screen name="RestaurantList" component={RestaurantList}/>
        <Stack.Screen name="KFC" component={KFC}/>
        <Stack.Screen name="McDonald" component={McDonald}/>
        <Stack.Screen name="PizzaHut" component={PizzaHut}/>
        <Stack.Screen name="PizzaPizza" component={PizzaPizza}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
