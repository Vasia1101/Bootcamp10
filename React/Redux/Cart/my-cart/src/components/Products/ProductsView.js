import React from "react";

const Products = ({ products = [], addToCart }) =>
  products.length > 0 ? (
    <ul>
      {products.map((id, name, price) => (
        <li key={id}>
          <p>
            {" "}
            <b>{name}</b>
          </p>
          <p>
            {" "}
            <b>Price: {price}$</b>
          </p>
          <button onClick={() => addToCart(id)}>Add to cart</button>
          <hr />
        </li>
      ))}
    </ul>
  ) : null;
export default Products;
