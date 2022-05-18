import React from "react";

const Product = (props) => {
  const { product } = props;
  return (
    <div>
      <div data-testid="testProductName">{product.name}</div>

      <div>
        <ul>
          {product.prices.map((price, index) => (
            <li key={index}>{price.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
