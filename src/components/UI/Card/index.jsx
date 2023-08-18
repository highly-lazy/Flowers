import React from "react";
import './style.scss'

function CardComponent() {
  const item = data.flowers.find(item => item.id === "1");

  return (
    <div>
      <div key={item.id}>
        
        <img src={item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
    </div>
  );
}

export default CardComponent;