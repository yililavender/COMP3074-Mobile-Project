import * as React from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';

function Item({title, onPress}) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.jpg')} 
    style={styles.backgroundImage}>
      <View style={styles.container}>
        <Item title='Search Restaurants' 
        onPress={() => navigation.navigate("Search")}/>
        <Item title='Rate Restaurants' 
        onPress={() => navigation.navigate("Rate Restaurants")}/>
        <Item title='My Favorites' 
        onPress={() => navigation.navigate("My Favorites")}/>
        <Item title='Restaurant Visited' 
        onPress={() => navigation.navigate("Restaurant Visited")}/>
        <Item title='About Us' 
        onPress={() => navigation.navigate("About Us")}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
  },item: {
    padding: 30,
    marginVertical: 6
  }, text: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold'
  }
});