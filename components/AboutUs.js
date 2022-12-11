import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function AboutUs ({ navigation, route }) {
  const localImage = require("../assets/about.png");
  return (
    <ImageBackground source={localImage} resizeMode='cover' style={styles.container}>
    <Text style={{ fontSize: 35}}>Group 24</Text>
    <Text style={{ fontSize: 25}}>Members:</Text>
    <Text style={{ fontSize: 20}}>Loman Chan Shum - 101241079</Text>
    <Text style={{ fontSize: 20}}>Elam He - 10302782</Text>
    <Text style={{ fontSize: 20}}>Hsin Yu Ivy Tsai - 100675355</Text>
    <Text style={{ fontSize: 20}}>Noor Ranya Said  - 101358069</Text>
    <Text style={{ fontSize: 20}}>Tung Po Alex Tsang  - 101349856</Text>


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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});