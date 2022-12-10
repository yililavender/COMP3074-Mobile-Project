import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';



export default function DetailScreen() {
  const [name, setName] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  const [tag, setTag] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Restaurant Name</Text>
      <TextInput style={styles.inputbox} onChangeText={(text) => {setName(text)}} 
      value={name}
      placeholder="Restaurant Name"></TextInput>
      <Text style={styles.paragraph}>Address</Text>
      <TextInput style={styles.inputbox} onChangeText={(text) => {setAddress(text)}} 
      value={address}
      placeholder="Restaurant Address"></TextInput>
      <Text style={styles.paragraph}>Phone</Text>
      <TextInput style={styles.inputbox} onChangeText={(text) => {setPhone(text)}} 
      value={phone}
      placeholder="Restaurant Phone"></TextInput>
      <Text style={styles.paragraph}>Description</Text>
      <TextInput style={styles.inputbox} onChangeText={(text) => {setDescription(text)}} 
      value={description}
      placeholder="Description Name"></TextInput>
      <Text style={styles.paragraph}>Restaurant Tags</Text>
      <TextInput style={styles.inputbox} onChangeText={(text) => {setTag(text)}} 
      value={tag}
      placeholder="Restaurant Tags"></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  inputbox: {
    height:40, 
    borderColor:"gery", 
    borderWidth:1, 
    width:'100%',
    marginBottom: 15
  }
});