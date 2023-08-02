import React from "react";

const MenuItem = ({ image, name, content, price }) => {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1 style={{ marginBottom: "10px" }}>{name}</h1>
      <h4 style={{ marginTop: "0" }}>{content}</h4>
      <p>
        <i style={{ color: "red", fontWeight: "bold" }}>{price} TL</i>
      </p>
    </div>
  );
};

export default MenuItem;
