import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Location, Permissions } from 'expo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Constants from 'expo-constants'

API_KEY = 'AIzaSyAhz-Fyn6Z6Ny0DV2t0WP7nM82TRO6t2Ds'

const {width, height} = Dimensions.get("window");

const ASPECT_RATIO = width/height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA*ASPECT_RATIO;
const INITIAL_POSTION = {
  latitude: 43.6532,
  longitude: 79.3832,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
}



type InputAutoCompleteProp = {
  label: string;
  placeholder: string;
  onplaceSelected: (details: GooglePlaceDetail | null) => void;
}

function InputAutoComplete({
  label,
  placeholder,
  onplaceSelected,
}: InputAutoCompleteProp) {
  return(
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{textInput: styles.input}}
        placeholder={placeholder || ''}
        fetchDetails
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          onplaceSelected(details)
        }}
        query={{
          key: API_KEY,
          language: 'en', 
        }}
      />
    </>
  )
}
export default function Map() {
  const [origin, setOrigin] = React.useState("")
  const [destination, setDestination] = React.useState("")

  const onplaceSelected = (
    details: GooglePlaceDetail | null, 
    flag: 'origin' | 'destination'
    ) => {
      const set = flag === 'origin' ? setOrigin : setDestination
      const position = {
        latitude: details?.geometry.location.lat || 0,
        longitude: details?.geometry.location.lng || 0
      }
      set(position)
  }
  
  return(
    <View style={styles.container}>
      <MapView 
         style={styles.map} 
         provider={PROVIDER_GOOGLE}
         initialRegion={INITIAL_POSTION}
      />
      <View style={styles.search}>
        <InputAutoComplete label='Origin' onplaceSelected={(details)=> {
          onplaceSelected(details, 'origin')
        }} />
      />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%',
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


