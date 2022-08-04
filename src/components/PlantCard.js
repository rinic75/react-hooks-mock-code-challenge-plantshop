import React, { useState } from "react";

function PlantCard({plant}) {
  const {id, name, image, price} = plant
  const [stock, setStock] = useState(true)

  function handleStock() {
    setStock(stock=> !stock)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
