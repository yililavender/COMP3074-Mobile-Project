import React from "react";

const ButtonComponent = props => {
  // if (props.load) {
  //   return <button>click me</button>;
  // } else {
  //   return <button>loading</button>;
  // }
  return <button>{props.load ? "click me" : "loading"}</button>;
};

ButtonComponent.defaultprops = {
  warna: "red",
  load: true
};

export default ButtonComponent;
