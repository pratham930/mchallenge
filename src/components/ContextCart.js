import React, { useContext } from "react";
import "./cart.css";
import Atom from "./Atom";
import { CartContext } from "./Cart";
import { NavLink } from "react-router-dom";

const ContextCart = () => {
  const { item, totalItem } = useContext(CartContext);
  return (
    <>
      <div>
        <div className="mar">
          <h4>
            <img src="/assets/restaurant_24px.svg" alt="" srcset="" />
            <NavLink className="active_class" to="/">
              {" "}
              Swasch Restaurant{" "}
            </NavLink>
          </h4>
          <button className="top" id="top-1">
            <div className="mg" id="mg-1">
              {" "}
              <img
                className="img"
                id="img-1"
                src="https://i.pinimg.com/originals/4e/51/1a/4e511adb8ca405f8893af07c9e2b885f.png"
                alt="Italian Trulli"
              />{" "}
            </div>
          </button>
          <NavLink className="active_class" to="/mart">
            <h6 className="num" id="num-1">
              {totalItem}
            </h6>
          </NavLink>
        </div>
        {item.map((event) => {
          return <Atom key={event.id} {...event} />;
        })}
      </div>
    </>
  );
};

export default ContextCart;
