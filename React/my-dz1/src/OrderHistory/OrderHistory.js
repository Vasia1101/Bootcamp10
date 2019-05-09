import React, { Fragment } from "react";
import History from "./OrderHistory_item";
import s from "./OrderHistory.module.css";

const OrderList = ({ items, onDelete, onShowMoreInfo }) => (
  <Fragment>
    <table className={s.table_blur}>
      <tbody>
        <tr>
          <th />
          <th>Date</th>
          <th>Price</th>
          <th>Delivery address</th>
          <th>Raiting</th>
          <th>Детальнее</th>
          <th>Удалить</th>
        </tr>
        {items.map(item => (
          <tr key={item.id}>
            <History
              idx={item.id + 1}
              date={item.date}
              price={item.price}
              address={item.address}
              rating={item.rating}
              onDelete={() => onDelete(item.id)}
              onShowMoreInfo={() => onShowMoreInfo(item.id)}
            />
          </tr>
        ))}
      </tbody>
    </table>
  </Fragment>
);
export default OrderList;
