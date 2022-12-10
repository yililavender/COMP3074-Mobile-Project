import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';

const DATA = []

function Restaurant({rid, rname, raddress, rphone, rdescription, rtag}) {
  return (
    {
      id: rid,
      name: rname,
      address: raddress,
      phone: rphone,
      description: rdescription,
      tag: rtag
    }
  )
}

export default function AddScreen({navigation, route}) {
  const [name, setName] = React.useState(route.params.name);
  const [address, setAddress] = React.useState(route.params.address);
  const [phone, setPhone] = React.useState(route.params.phone);
  const [description, setDescription] = React.useState("");
  const [tag, setTag] = React.useState("");

  const submit = () => {
    const rid = DATA.length
    rest = Restaurant(rid, name, address, phone, description, tag)
    DATA.push(rest)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Restaurant Name</Text>
      <TextInput style={styles.inputbox} 
      onChangeText={(text) => {setName(text)}} 
      value={name}
      placeholder="Restaurant Name"></TextInput>
      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.inputbox} 
      onChangeText={(text) => {setAddress(text)}} 
      value={address}
      placeholder="Restaurant Address"></TextInput>
      <Text style={styles.label}>Phone</Text>
      <TextInput style={styles.inputbox} 
      onChangeText={(text) => {setPhone(text)}} 
      value={phone}
      placeholder="Restaurant Phone"></TextInput>
      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.inputbox} 
      onChangeText={(text) => {setDescription(text)}} 
      value={description}
      placeholder="Restaurant Description"></TextInput>
      <Text style={styles.label}>Restaurant Tags</Text>
      <TextInput style={styles.inputbox} 
      onChangeText={(text) => {setTag(text)}} 
      value={tag}
      placeholder="Restaurant Tags"></TextInput>
      <View>
        <Button title="Add" color="green" onPress={() => {submit()}} />
        <Button title="Cancel" color="red" onPress={() => navigation.goBack()} />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  label: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 'bold'
  },
  inputbox: {
    height:40, 
    borderColor:"gery", 
    borderWidth:1, 
    width:'100%',
    marginBottom: 15
  }
});