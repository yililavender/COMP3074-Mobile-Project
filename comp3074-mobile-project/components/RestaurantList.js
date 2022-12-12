import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Item({name, onPress}) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  )
}

export default function RestaurantList({ navigation, route }) {
  const [restaurantList, setRestaurants] = React.useState([])
  const [searchText, setText] = React.useState("")
  
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('data')
      return jsonValue !== null ? setRestaurants(JSON.parse(jsonValue)) : 
      setRestaurants();
    } catch(e) {
      console.log(e)
    }
  } 

  React.useEffect(() => {getData()})

  return (
    <SafeAreaView style={styles.container}>
      {restaurantList.length > 0 ? 
      <FlatList 
        data={restaurantList}
        renderItem={
          ({item})=>{
            return (<Item 
              name={item.name}
              onPress={() => navigation.navigate("Details", { item })} 
              textColor={{color: 'azure'}}
            />)
          }
        }
        keyExtractor={item => item.place_id}
      /> :
      <Text>You haven't add any restaurant to your list yet.</Text>}
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 14
  },
  item: {
    backgroundColor: '#795906',
    padding: 20,
    marginVertical: 6
  }
});