// Rate Restaurant by stars
import {SafeAreaView,StyleSheet,View,Text,Image,TouchableOpacity,} from 'react-native';
import React, {useState} from 'react';

const RateRestaurant = () => {
  const [selectStar, setSelectStar] = useState(3);
  const [maxStar, setMaxStar] = useState([1, 2, 3, 4, 5, 6]);

  const filledStar =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

  const emptyStar =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

  const Rate = () => {
    return (
      <View style={styles.starStyle}>
        {maxStar.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              key={item}
              onPress={() => setSelectStar(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= selectStar
                    ? {uri: filledStar}
                    : {uri: emptyStar}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Rate this Restaurant
        </Text>
        <Text style={styles.textStyle}>
          What is your Rate?
        </Text>
         <Text style={styles.textStyleSmall}>
          Please provides your experience
        </Text>

        <Rate />
        <Text style={styles.textStyle}>

          {selectStar} / {Math.max.apply(null, maxStar)}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(selectStar)}>
         
          <Text style={styles.buttonTextStyle}>
            Send your Rate
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RateRestaurant;

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
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#a9c2ff',
  },
  buttonTextStyle: {
    color: 'black',
    textAlign: 'center',
  },
  starStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});
