import * as React from 'react';
import { Text, StyleSheet, Button, TouchableOpacity, FlatList, SafeAreaView, TextInput, ActivityIndicator } from 'react-native';

function Item({title, address, rating, onPress}) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>Rating: {rating} / 5</Text>
      <Text style={styles.text}>Address: {address}</Text>
    </TouchableOpacity>
  )
}

export default function SearchRestaurants({navigation}) {
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
      <FlatList 
        data={restaurantList}
        renderItem={
          ({item})=>{
            return (<Item 
              title={item.name}
              rating={item.rating} 
              address={item.formatted_address}
              onPress={() => navigation.navigate("Details", { item })} 
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
  },
  inputbox: {
    height:40, 
    borderColor:"gery", 
    borderWidth:1, 
    width:'100%',
    marginBottom: 15
  }
});