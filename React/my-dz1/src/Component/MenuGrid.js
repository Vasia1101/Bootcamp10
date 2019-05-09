import React from "react";
import MenuCard from "./MenuCard";

import s from "./MenuGrid.module.css";

const MenuGrid = ({ items, onDelete, onShowMoreInfo }) => (
  <ul className={s.ulItemGrid}>
    {items.map(item => (
      <li key={item.id}>
        <MenuCard
          name={item.name}
          price={item.price}
          image={item.image}
          onDelete={() => onDelete(item.id)}
          onShowMoreInfo={() => onShowMoreInfo(item.id)}
        />
      </li>
    ))}
  </ul>
);

export default MenuGrid;
