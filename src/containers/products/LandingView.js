import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import ProductDisplay from "../../components/product/ProductDisplay";
class LandingView extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <ProductDisplay
          /*imgUrl1="https://images.unsplash.com/photo-1491592459486-f04f965504d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=509fa55374e92fdf1a5852593d0734a1&auto=format&fit=crop&w=800&q=60"
          imgUrl2="https://images.unsplash.com/photo-1491592459486-f04f965504d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=509fa55374e92fdf1a5852593d0734a1&auto=format&fit=crop&w=800&q=60"
          imgUrl3="https://images.unsplash.com/photo-1491592459486-f04f965504d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=509fa55374e92fdf1a5852593d0734a1&auto=format&fit=crop&w=800&q=60"
          imgUrl4="https://images.unsplash.com/photo-1491592459486-f04f965504d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=509fa55374e92fdf1a5852593d0734a1&auto=format&fit=crop&w=800&q=60"*/
          title="Demo Product"
          description="No description available"
          price="Rs 999"
          sku="SKU:1234567"
        />
      </Aux>
    );
  }
}

export default LandingView;
