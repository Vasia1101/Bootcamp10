import React from "react";
import Button from './Button/Button';

const x = [{
    id: 1,
    name: "Картофель, запеченный в мундире",
    names: "Картофель, запеченный в мундире",
    description: "Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой.",
    image: "https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg",
    price: 100,
    
  }]

const DiscrabeList = (names, image, alt, bigDescr, name, descr, price) => (
    <div>
    <img className="image" src={image} alt={alt}/>
    <ul className="container">
          <p className="colorName">
            {name}
          </p>
          <h1 className="nameClose">{names}</h1>
          <p className="opusClose">{bigDescr}</p>
          <p className="loremOpus">{descr}</p>
          <span className="chena">{price}</span>
          <Button/>

          </ul>
          </div>
);
export default DiscrabeList;