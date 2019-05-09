import React, { Fragment } from "react";
import s from "./OrderHistoryItem.module.css";

const History = ({
  date,
  price,
  address,
  rating,
  idx,
  onShowMoreInfo,
  onDelete
}) => (
  <Fragment>
    <td>{idx}</td>
    <td>{date}</td>
    <td>{price}$</td>
    <td>{address}</td>
    <td>{rating}</td>
    <td>
      <button className={s.butt} type="button" onClick={onShowMoreInfo}>
        More info
      </button>
    </td>
    <td>
      <button className={s.butt} type="button" onClick={onDelete}>
        Delete
      </button>
    </td>
  </Fragment>
);

export default History;
