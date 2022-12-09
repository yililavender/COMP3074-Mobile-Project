import React from 'react'
import { Text } from 'react-native-paper'

// AIzaSyAYUSjjwuGFc39sHx0iQs9oGcETmzAEesk


function SearchPage() {
  const [restaurants, setRestaurants] = React.useState([])

  const getRestaurant = async () => {
    try{ 
      const restaurants = await fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json/restaurant')
      console.log(restaurants);
    } catch (e) {
      console.log(e);
    } finally{
      console.log('finally');
    }
  }

  console.log(getRestaurant);

}



export default function SearchRestaurant() {
  return (
    <Text>
        <SearchPage/>
    </Text>
  )
}
