import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Product.css";
class Product extends Component {
  state = {
    id: Number,
    name: String,
    make: String,
    model: String,
    description: String,
    quantity: String,
    price: String,
    imgUrl1: String,
    imgUrl2: String,
    imgUrl3: String,
    imgUrl4: String
  };
  render() {
    return (
      <Aux>
        <img src={this.state.imgUrl1} alt="main" />
        <figcaption>{this.state.name}</figcaption>
        <span className={classes.price}>{this.state.price}</span>
        <a className={classes.button} href="http://localhost:3000">
          Buy Now
        </a>
      </Aux>
    );
  }
}

export default Product;
