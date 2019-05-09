import React from "react";
import MenuCardMoreInfo from "./MenuCardMoreInfo";

const MenuCridMoreInfo = ({ items, sendComment, handleChange }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <MenuCardMoreInfo
          name={item.name}
          description={item.description}
          image={item.image}
          ingredients={`${item.ingredients}`}
          price={item.price}
          sendComment={sendComment}
          handleChange={handleChange}
        />
      </li>
    ))}
  </ul>
);
export default MenuCridMoreInfo;
