import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Text, ActivityIndicator } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Test( {navigation, route} ) {
  const [isLoading, setLoading] = React.useState(true);
  const [restaurant, setRestaurant] = React.useState([])

  const getRestaurantList = async () => {
    const getID = route.params.id
    const data = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${getID}&key=AIzaSyAYUSjjwuGFc39sHx0iQs9oGcETmzAEesk`)
    const json = await data.json()
    setRestaurant(json.result)
    setLoading(false)
  }
  
  React.useEffect(() => {
    getRestaurantList().catch(console.error)
    console.log(restaurant.name);
  },[getRestaurantList])

  return (
    <SafeAreaView>
      { isLoading ? <ActivityIndicator/> : (
        <>
            <Text>Restaurant name: {restaurant.name}</Text>
            <Text>Rating: {restaurant.rating}</Text>
        </>

      )}
    </SafeAreaView>
  )}