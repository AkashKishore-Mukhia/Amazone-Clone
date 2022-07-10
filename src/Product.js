import React from "react";
import "./Product.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import book from "./images/atomicHabit.jpg";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The learn setup</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
          <p>
            <StarBorderIcon />
          </p>
        </div>
        <div className="product_img">
          <img
            src={book}
            alt=""
          />

          <button>Add to Busket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
