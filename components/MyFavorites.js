import React from "react";
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text,SafeAreaView,Image } from 'react-native';
class MyFavorites extends React.Component {
  render() {

    return (
      <SafeAreaView style={styles.container}>
      <ImageBackground
          style={{ flex: 5 }}
          source={require('../assets/icon.png') }
      >
      <Image
          source={require('../assets/Logo.png')}
          style={{ width: 40, height: 40, marginTop: 90 }}
      />   
        <Text style={styles.titleText}>You have not added Favorite restaurants</Text>
         </ImageBackground>
      </SafeAreaView>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  })
export default MyFavorites;