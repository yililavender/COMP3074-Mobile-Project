import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function RestaurantVisited({ navigation, route }) {

  return (
    <View>
      <Text>Restaurant Visited</Text>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});