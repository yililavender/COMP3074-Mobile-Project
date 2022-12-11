import React from "react";
import PropTypes from "prop-types";

class RestaurantList extends React.Component {
  render() {
    const product = this.props.restaurants.map(item => (
      <div className="listrestaurant" key={item.id}>
        <div className="imagenya">
          <img className="imgstyle" src={item.image} alt={item.name} />
        </div>
        <div className="descnya">
          <h3>Name : {item.name}</h3>
          <p>
            <span className="desc">Description : {item.description}</span>
            <br />
            <span>Location: {item.location}</span>
          </p>
          <button onClick={() => this.props.add(item.id)}>Add to Fav</button>
        </div>
      </div>
    ));
    return (
      <div>
        <h2>Restaurant</h2>
        {product}
      </div>
    );
  }
}

RestaurantList.propTypes = {
  restaurant: PropTypes.number.isRequired
};

export default RestaurantList;
