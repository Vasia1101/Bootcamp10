import React from "react";

const MenuCardMoreInfo = ({
  name,
  description,
  image,
  ingredients,
  price,
  textarea,
  rait,
  sendComment,
  handleChange
}) => (
  <>
    <h1>{name}</h1>
    <img src={image} alt={name} width={480} height={320} />
    <p>Опис:{description}</p>
    <p>Склад:{ingredients}</p>
    <p>Ціна:{price} uah</p>
    <form onSubmit={sendComment}>
      <textarea
        name="textarea"
        value={textarea}
        placeholder="Enter your comment"
        onChange={handleChange}
        cols={40}
        rows={10}
      />
      <div>
        <span>Оцініть страву за 10 бальною шкалою</span>
        <select name="rait" value={rait} onChange={handleChange}>
          <option value="">...</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </>
);

export default MenuCardMoreInfo;
