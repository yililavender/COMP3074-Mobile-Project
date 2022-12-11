import React from "react";

import RestaurantList from "./components/RestaurantList";
import RestaurantFavorite from "./components/RestaurantFavorite";
import ButtonComponent from "./components/ButtonComponent";
import FormInput from "./components/FormInput";

const KFCIMG = './assets/Kfc_logo.png';
const MCIMG = './assets/McDonalds.png';
const PizzaHutIMG = './assets/Pizza-Hut-logo.jpeg';
const PizzaPizzaIMG = './assets/pizza-pizza-logo.png';

class App extends React.Component {
  state = {
    restaurants: [
      {
        id: 1,
        name: "KFC",
        image: require("./assets/Kfc_logo.png"),
        description:
          "KFC is a global chicken restaurant brand with a rich, decades-long history of success and innovation. It all started with one cook, Colonel Harland Sanders, who created a finger lickin' good recipe more than 75 years ago—a list of 11 secret herbs and spices scratched out on the back of his kitchen door.",
        location: "10 Jacob Keffer Pkwy, Concord, ON L4K 5E3"
      },
      {
        id: 2,
        name: "McDonald",
        image: require("./assets/McDonalds.png"),
        description:
          "McDonald's is the world's leading food service organization. We generate more than $40 billion in Systemwide sales. We operate over 30,000 restaurants in more than 100 countries on six continents. We have the benefits that come with scale and a strong financial position.",
        location: "150 McNaughton Rd E Building J, Vaughan, ON L6A 4P5"
      },
      {
        id: 3,
        name: "Pizza Hut",
        image: require("./assets/Pizza-Hut-logo.jpeg"),
        description:
          "Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney. They serve their signature pan pizza and other dishes including pasta, breadsticks and dessert at dine-in, take-out and delivery chain locations.",
        location: " 6005 Yonge St, Toronto, ON M2M 3W2"
      },
      {
        id: 4,
        name: "Pizza Pizza",
        image: require("./assets/pizza-pizza-logo.png"),
        
        description:
          "Pizza Pizza Ltd. is a franchised Canadian pizza quick-service restaurant with its headquarters in Toronto, Ontario.[1] Its restaurants are mainly in the province of Ontario while others are located in Quebec, Nova Scotia, New Brunswick and western Canada. Franchises in western Canada are mostly run through Alberta-based subsidiary Pizza 73. It has over 500 locations, including over 150 non-traditional locations",
        location: "9200 Bathurst St, Richmond Hill, ON L4J 8W1"
      }
    ],
    restaurantsfav: [],
    isloading: false
  };

  addToFavorite = id => {
    const data = this.state.restaurants.find(item => item.id === id);
    this.setState({
      restaurantsfav: [...this.state.restaurantsfav, data]
    });
  };

  deleteToFavorite = id => {
    const hapus = this.state.restaurantsfav.filter(item => item.id !== id);
    this.setState({ restaurantsfav: hapus });
  };

  addNewRestaurant = data => {
    this.setState({
      restaurants: [data, ...this.state.restaurants]
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="center">Favorite Restaurants</h1>
        <FormInput />
        <div className="wrap">
          <div className="container-left">
            <RestaurantList restaurants={this.state.restaurants} add={this.addToFavorite} />
            <hr />
          </div>
          <div className="container-right">
            <RestaurantFavorite
              restaurantsfav={this.state.restaurantsfav}
              delete={this.deleteToFavorite}
            />
          </div>
          <div>
            <ButtonComponent load={this.state.isloading} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
