import React from "react";
import { useState, useEffect } from "react";
import MenuItemsCard from "./MenuItemsCard";
import axios from "axios";

function MenuItemsList() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://redmangoapi.azurewebsites.net/api/MenuItem")
      .then((response) => {
        console.log(response.data);
        setMenuItems(response.data.result);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="container row">
      {menuItems.length > 0 &&
        menuItems.map((menuItems, index) => (
          <MenuItemsCard menuItems={menuItems} key={index} />
        ))}
    </div>
  );
}

export default MenuItemsList;
