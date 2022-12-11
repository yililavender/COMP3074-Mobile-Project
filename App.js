import HomeScreen from "./components/HomeScreen";
import SearchRestaurants from "./components/SearchRestaurants";
import RateRestaurtants from "./components/RateRestaurtants";
import MyFavorites from "./components/MyFavorites";
import RestaurantVisited from "./components/RestaurantVisited";
import AboutUs from "./components/AboutUs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title: "Welcome"}}
        />
        <Stack.Screen
          name='SearchRestaurants'
          component={SearchRestaurants}
          options={{title: "Search Restaurants"}}
        />
        <Stack.Screen
          name='RateRestaurtants'
          component={RateRestaurtants}
          options={{title: "Rate Restaurtants"}}
        />
        <Stack.Screen
          name='MyFavorites'
          component={MyFavorites}
          options={{title: "My Favorites"}}
        />
        <Stack.Screen
          name='RestaurantVisited'
          component={RestaurantVisited}
          options={{title: "Restaurant Visited"}}
        />
        <Stack.Screen
          name='AboutUs'
          component={AboutUs}
          options={{title: "About Us"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

