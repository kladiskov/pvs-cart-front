import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./ProductDisplay.css";
const productDisplay = props => {
  return (
    <Aux>
      <div id={classes.wrap}>
        <div id={classes.product_layout_1}>
          <div className={classes.top}>
            <div className={classes.product_images}>
              <div className={classes.product_image_1}>
                <img src={props.imgUrl1} alt="Main" />
              </div>
              <div className={classes.product_image_small}>
                <div className={classes.product_image_2}>
                  <img src={props.imgUrl2} alt="Sub1" />
                </div>
                <div className={classes.product_image_3}>
                  <img src={props.imgUrl3} alt="Sub2" />
                </div>
                <div className={classes.product_image_4}>
                  <img src={props.imgUrl4} alt="Sub3" />
                </div>
              </div>
            </div>
            <div className={classes.product_info}>
              <h1>{props.title}</h1>
              <div className={classes.price}>
                <h2 className={classes.sale_price}>{props.price}</h2>
              </div>
              <div className={classes.product_description}>
                <p>{props.description}</p>
              </div>
              <div className={classes.related_info}>
                <span className={classes.sku}>{props.sku}</span>
                <span className={classes.quantity}>QTY:85</span>
              </div>
              <div className={classes.options}>
                <div className={classes.buying_options}>
                  <div className={classes.select}>
                    <select id="color">
                      <option value="1">Yellow</option>
                      <option value="2">Red</option>
                      <option value="3">Blue</option>
                      <option value="4">Floral</option>
                    </select>
                  </div>
                  <div className={classes.select}>
                    <select id="size">
                      <option value="1">Small</option>
                      <option value="2">Medium</option>
                      <option value="3">Large</option>
                      <option value="4">X-Large</option>
                    </select>
                  </div>
                </div>
                <div className={classes.buying}>
                  <div className={classes.cart}>
                    <a href="http://localhost" className={classes.add}>
                      Add to Cart <i className="fa fa-shopping-cart fa-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.bottom} />
        </div>
      </div>
    </Aux>
  );
};

export default productDisplay;
