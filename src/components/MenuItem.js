import React from "react";

function MenuItem({ image, name, price,time }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ₹{price} </p>
      <h2>{time}</h2>
    </div>
  );
}

export default MenuItem;