import React from 'react';

const MenuCard = ({name, image, price, onDelete, onShowMore}) => (
    <div>
        <img src={image} alt={name} width={320} height={240}/>
        <p>{name}</p>
        <p>Price:{price}</p>
        <button type='button' onClick={onDelete}>Delete</button>
        <button type='button' onClick={onShowMore}>More Info</button>
 </div>
);

export default MenuCard;