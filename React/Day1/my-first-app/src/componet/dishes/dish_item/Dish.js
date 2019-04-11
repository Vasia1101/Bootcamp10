import React, {Fragment} from 'react';

const Dish = ({name,descr,image,price}) => (
<Fragment>
    <div className="containerDish">
<h2>{name}</h2>
<p>{descr}</p>
<img src={image} alt={name}/>
<p>{price}</p>
</div>
</Fragment>
);

export default Dish;