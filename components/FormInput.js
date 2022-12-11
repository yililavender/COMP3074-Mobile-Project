import React from "react";

class FormInput extends React.Component {
  state = {
    title: "",
    desc: "",
    location: ""
  };

  addValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addNewRestaurant = e => {
    e.preventDefault();
    const newrestaurant = {
      id: 4,
      image: require("../assets/Restaurant.logo.jpeg"),
      title: this.state.title,
      desc: this.state.desc,
      location: this.state.location
    };
    this.props.newRestaurant(newrestaurant);
  };

  render() {
    const { title, desc, location } = this.state;
    return (
      <div>
      
          
          
  
      </div>
    );
  }
}

export default FormInput;
