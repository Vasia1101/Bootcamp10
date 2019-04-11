import React, { Fragment } from 'react';
import History from './OrderHistory_item';
import './OrderHistory.module.css';

const OrderList = ({ db }) => (
  <Fragment>
    <table>
      <tbody>
        <tr>
          <td />
          <td>Date</td>
          <td>Price</td>
          <td>Delivery address</td>
          <td>Raiting</td>
        </tr>
        {db.map(item => (
          <tr key={item.id}>
            <History
              idx={item.id + 1}
              date={item.date}
              price={item.price}
              address={item.address}
              rating={item.rating}
            />
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>
);
export default OrderList;
