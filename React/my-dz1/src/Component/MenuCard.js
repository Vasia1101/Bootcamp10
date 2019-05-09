import React from "react";
import s from "./MenuCard.module.css";

const MenuCard = ({ name, image, price, onShowMoreInfo, onDelete }) => (
  <>
    <img src={image} alt={name} className={s.imageCard} />
    <p>{name}</p>
    <p>Price:{price}</p>
    <button type="button" onClick={onShowMoreInfo}>
      More info
    </button>
    <button type="button" onClick={onDelete}>
      Delete
    </button>
  </>
);

export default MenuCard;
