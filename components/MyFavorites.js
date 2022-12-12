
import React from "react";

class MyFavorites extends React.Component {
  render() {
    const fav = this.props.restaurantsfav.map(item => (
      <div className="listrestaurant" key={item.id}>
        <div className="imagenya">
          <img className="imgstyle" src={item.image} alt={item.name} />
        </div>
        <div className="descnya">
          <h3>Name : {item.name}</h3>
          <p>
            <br />
            <span>Location: {item.location}</span>
            <button onClick={() => this.props.delete(item.id)}>
              Delete from Favorite
            </button>
          </p>
        </div>
      </div>
    ));
    return (
      <div>
        <h2>Favorite</h2>
        {fav}
      </div>
    );
  }
}

export default MyFavorites;
