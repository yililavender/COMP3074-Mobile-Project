import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, FlatList, SafeAreaView, TextInput, ActivityIndicator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Constants from 'expo-constants';
import ToolbarAndroid from '@react-native-community/toolbar-android';

// You can import from local files
import DetailScreen from './components/DetailScreen';
import Add from './components/Add';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function Item({title, address, rating, backgroundColor, textColor, onPress}) {
  return (
    <TouchableOpacity style={[styles.item, backgroundColor]} onPress={onPress}>
      <Text style={[styles.title, textColor]}>{title}</Text>
      <Text style={[styles.text, textColor]}>Rating: {rating} / 5</Text>
      <Text style={[styles.text, textColor]}>Address: {address}</Text>
    </TouchableOpacity>
  )
}

function HomeScreen({navigation}) {
  const [refresh, setRefresh] = React.useState(0)
  const [selectedId, setSelectedId] = React.useState(null)
  const [isLoading, setLoading] = React.useState(true);
  const [restaurantList, setRestaurants] = React.useState([])
  const [searchText, setText] = React.useState("")


  const getRestaurantList = async () => {
    try{
      const query = searchText.toLowerCase()
      const data = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=Toronto%${query}&type=restaurant&location=43.6532%2c79.3832&radius=10000&key=AIzaSyAYUSjjwuGFc39sHx0iQs9oGcETmzAEesk`)
      const json = await data.json()
      setRestaurants(json.results)
    } catch (e) {
      console.error(e)
    }finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {getRestaurantList()})

  return (
    <SafeAreaView style={styles.container}>
    {
      isLoading ? <ActivityIndicator/> :
      <>
      <TextInput style={styles.inputbox} 
      onChangeText={(text) => {setText(text)}} 
      value={searchText}
      placeholder="Search restaurant" ></TextInput>
      <Button title='Search' onPress={() => {}}/>
      
      <FlatList 
        data={restaurantList}
        renderItem={
          ({item})=>{
            return (<Item 
              title={item.name}
              rating={item.rating} 
              address={item.formatted_address}
              onPress={() => navigation.navigate("Details", { id: item.place_id })} 
              textColor={{color: 'azure'}}
            />)
          }
        }
        keyExtractor={item => item.place_id}
      />
      </>
    }
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailScreen}/>
        <Stack.Screen name="Add" component={Add}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 22
  },
  text: {
    fontSize: 14
  },
  item: {
    backgroundColor: '#6e3b6e',
    padding: 20,
    marginVertical: 6
  },
  inputbox: {
    height:40, 
    borderColor:"gery", 
    borderWidth:1, 
    width:'100%',
    marginBottom: 15
  }
});
