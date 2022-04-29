import React from "react";
import "./ServicesCardItem.css";

function ServicesCardItem(props) {
  return (
    <div className='card-item'>
      <div className='icon'>{props.img}</div>
      <div className='card-title'>
        <h3>{props.title}</h3>
      </div>
      <div className='card-text'>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default ServicesCardItem;
