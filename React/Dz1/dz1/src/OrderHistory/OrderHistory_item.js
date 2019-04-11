import React, { Fragment } from 'react';

const History = ({ date, price, address, rating, idx }) => (
  <Fragment>
    <td>{idx}</td>
    <td>{date}</td>
    <td>{price}$</td>
    <td>{address}</td>
    <td>{rating}</td>
  </Fragment>
);

export default History;
