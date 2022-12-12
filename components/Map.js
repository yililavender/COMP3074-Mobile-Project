import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Dimensions, Button } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants'

GOOGLE_API_KEY = ''

type InputAutocompleteProps = {
  label: string;
  placeholder?: string;
  onPlaceSelected: (details: GooglePlaceDetail | null) => void;
};

function InputAutocomplete({
  label,
  placeholder,
  onPlaceSelected,
}: InputAutocompleteProps){
  return(
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
          styles={{ textInput: styles.input }}
          placeholder={placeholder || ""}
          fetchDetails
          onPress={(data, details = null) => {
            onPlaceSelected(details)
          }}
          query={{
            key: {GOOGLE_API_KEY},
            language: "pt-BR"
          }}
        />
    </>
  )
}

const Map = () => {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")

  // const {width, height} = Dimensions.get("window");
  // const ASPECT_RATIO = width/height;
  // const LATITUDE_DELTA = 0.02;
  // const LONGITUDE_DELTA = LATITUDE_DELTA*ASPECT_RATIO;
  // const INITIAL_POSITION = {
  //   latitude: 43.642647,
  //   longitude: -79.383850,
  //   latitudeDelta: 0.0922,
  //   longitudeDelta: LONGITUDE_DELTA,
  // }

  const [mapRegion, setmapRegion] = useState({
    latitude: 43.642647,
    longitude: -79.383850,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMessage('Location permission was denied')
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: True});
      setmapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421, 
      });
  }

  useEffect(() => {
    userLocation();
  }, [])

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={mapRegion}
      >
      <Marker coordinate={mapRegion} title='You are here' />
      </MapView>
      
      <Button title='Get Location' onPress={userLocation} />
    </View>
  );
};

// <View style={styles.search}>
//   <InputAutocomplete
//     label="Origin" onPlaceSelected={()=>{}}
//   />
//   <InputAutocomplete
//     label="Destination" onPlaceSelected={()=>{}}
//   />
// </View>

// <GooglePlacesAutocomplete
//   styles={{ textInput: styles.input }}
//   placeholder="Search"
//   onPress={(data, details = null) => {
//     console.log(data, details)
//   }}
//   query={{
//     key: {GOOGLE_API_KEY},
//     language: "en"
//   }}
// />

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    alignSelf: 'stretch'
  },
  search: {
    position: 'absolute',
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight
  },
  input: {
    borderColor: '#888',
    borderWidth: 1
  }
});