import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function AboutUs () {
  return (
    <ImageBackground source={require('../assets/background.jpg')} 
    style={styles.backgroundImage} imageStyle={{opacity: 0.4}}>
      <View style={styles.container}>
        <Text style={styles.title}>Group 24</Text>
        <Text style={styles.subtitle}>Members:</Text>
        <Text style={styles.paragraph}>Loman Chan Shum - 101241079</Text>
        <Text style={styles.paragraph}>Elam He - 101302782</Text>
        <Text style={styles.paragraph}>Hsin Yu Ivy Tsai - 101331867</Text>
        <Text style={styles.paragraph}>Hui Qiu -100675355</Text>
        <Text style={styles.paragraph}>Noor Ranya Said  - 101358069</Text>
        <Text style={styles.paragraph}>Tung Po Alex Tsang  - 101349856</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 5,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
  },
  title: {
    margin: 24,
    marginTop: 0,
    fontSize: 35,
    fontWeight: 'bold',
  },
  subtitle: {
    margin: 24,
    marginTop: 0,
    fontSize: 28,
    fontWeight: 'bold',
  }
});