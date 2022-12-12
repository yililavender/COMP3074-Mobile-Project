import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, ImageBackground, TouchableOpacity, Text } from 'react-native';

function Item({title, onPress}) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default function HomeScreen({ navigation }) {

  const localImage = require("../assets/homepage.png");
  return (
    <ImageBackground source={localImage} style={styles.container}>
      <View>
        <Item title="Search Restaurants" 
        onPress={() => navigation.navigate("SearchRestaurants")} />

        <Item title="Rate Restaurtants"
        onPress={() => navigation.navigate("RateRestaurtants")} />

        <Item title="My Favorites"
        onPress={() => navigation.navigate("MyFavorites")} />

        <Item title="Restaurant Visited"
        onPress={() => navigation.navigate("RestaurantVisited")} />

        <Item title="About Us"
        onPress={() => navigation.navigate("AboutUs")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  item: {
    padding: 30,
    marginVertical: 6
  },
  text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold'
  }
});
