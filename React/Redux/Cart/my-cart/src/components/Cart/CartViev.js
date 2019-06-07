import React from "react";

const Cart = ({ products = [] }) => {
  products.length = 0 ? (
    <table>
      <tbody>
        {products.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{amount}</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1>Go and bye anything or go away from here</h1>
  );
};

export default Cart;
