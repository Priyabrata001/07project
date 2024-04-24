import React from "react";
import { Link } from "react-router-dom";
//const data=React.createContext();

function MenuItemCard({ menuItems }) {
    
    //const [useSate,setUseState]=useSate[('')];
  return (
    <div className="col-md-4 col-12 p-2">
      <div
        className="card"
        style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}
      >
        <div className="card-body pt-2">
          <div className="row col-10 offset-1 p-2">
            <Link to={`/menuItemDetails/${menuItems.id}`}>
              <img
                src={menuItems.image}
                style={{ borderRadius: "50%" }}
                alt=""
                className="w-100 mt-5 image-box"
              />
            </Link>
          </div>
          {menuItems.specialTag && menuItems.specialTag.length > 0 && (
            <i
              className="bi bi-star btn btn-success"
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                padding: "5px 10px",
                borderRadius: "3px",
                outline: "none !important",
                cursor: "pointer",
              }}
            >
              &nbsp; {menuItems.specialTag}
            </i>
          )}

          <i
            className="bi bi-cart-plus btn btn-outline-danger"
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              padding: "5px 10px",
              borderRadius: "3px",
              outline: "none !important",
              cursor: "pointer",
            }}
          ></i>

          <div className="text-center">
            <p className="card-title m-0 text-success fs-3">
              <Link
                to={`/menuItemDetails/${menuItems.id}`}
                style={{ textDecoration: "none", color: "green" }}
              >
                {menuItems.name}
              </Link>
            </p>
            <p className="badge bg-secondary" style={{ fontSize: "12px" }}>
              {menuItems.category}
            </p>
          </div>
          <p className="card-text" style={{ textAlign: "center" }}>
            {menuItems.description}
          </p>
          <div className="row text-center">
            <h4>${menuItems.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;
