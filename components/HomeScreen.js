import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, ImageBackground } from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);


export default function HomeScreen({ navigation }) {

  const localImage = require("../assets/homepage.png");
  return (
    <ImageBackground source={localImage} resizeMode='cover' style={styles.container}>
      <Button
        title="Search Restaurants" 
        onPress={() => navigation.navigate("SearchRestaurants")}
      />

      <Separator />

      <Button 
        title="Rate Restaurtants"
        onPress={() => navigation.navigate("RateRestaurtants")}
      />

      <Separator />

       <Button 
        title="My Favorites"
        onPress={() => navigation.navigate("MyFavorites")}
      />

      <Separator />


       <Button 
        title="Restaurant Visited"
        onPress={() => navigation.navigate("RestaurantVisited")}
      />
      
      <Separator />

       <Button 
        title="About Us"
        onPress={() => navigation.navigate("AboutUs")}
      />
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

  separator: {
    marginVertical: 50,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },


});