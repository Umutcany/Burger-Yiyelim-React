import React from "react";
import { Data } from "../helpers/Data.js";
import MenuItem from "../components/MenuItem.js";
import "../styles/Menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, index) => {
          return (
            <MenuItem
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
