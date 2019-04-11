import React from "react";
import Dish from './dish_item/Dish';


const DishesList = ({db}) => (
    <ul>
        {db.map(item =>(
            <li key={item.id}> <a href="#">
            <Dish
name={item.name}
desc={item.description}
image={item.image}
price={item.price}
/>
</a>
            
            </li>
            
        ))}
    </ul>
);
export default DishesList;