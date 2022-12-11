import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddScreen({navigation, route}) {
  const [rname, setName] = React.useState(route.params.name);
  const [raddress, setAddress] = React.useState(route.params.address);
  const [rphone, setPhone] = React.useState(route.params.phone);
  const [rdescription, setDescription] = React.useState("");
  const [rtag, setTag] = React.useState("");
  const [restaurantList, setRestaurants] = React.useState([])
  
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('data')
      return jsonValue !== null ? setRestaurants(JSON.parse(jsonValue)) : 
      setRestaurants();
    } catch(e) {
      console.log(e)
    }
  }

  const submit = async () => {
    try{
      const r = {
        place_id: route.params.place_id,
        name: rname,
        address: raddress,
        phone: rphone,
        description: rdescription,
        tag: rtag
      } 
      restaurantList.push(r)
      await AsyncStorage.setItem('data', JSON.stringify(restaurantList))
    } catch(e) {
      console.log(e)
    } finally {
      navigation.navigate("My Restaurant List")
    }
  }

  React.useEffect(() => {getData()})

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Restaurant Name</Text>
      <TextInput style={styles.inputbox} 
      onChangeText={(text) => {setName(text)}} 
      value={rname}
      placeholder="Restaurant Name"></TextInput>
      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.inputbox} 
      onChangeText={(text) => {setAddress(text)}} 
      value={raddress}
      placeholder="Restaurant Address"></TextInput>
      <Text style={styles.label}>Phone</Text>
      <TextInput style={styles.inputbox} 
      onChangeText={(text) => {setPhone(text)}} 
      value={rphone}
      placeholder="Restaurant Phone"></TextInput>
      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.inputbox} 
      onChangeText={(text) => {setDescription(text)}} 
      value={rdescription}
      placeholder="Restaurant Description"></TextInput>
      <Text style={styles.label}>Restaurant Tags</Text>
      <TextInput style={styles.inputbox} 
      onChangeText={(text) => {setTag(text)}} 
      value={rtag}
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