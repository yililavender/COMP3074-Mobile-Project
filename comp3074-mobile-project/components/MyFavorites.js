import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MyFavorites({ navigation, route }) {

  return (
    <View>
      <Text>My Favorites</Text>
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