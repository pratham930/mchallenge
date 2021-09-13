import React, { useContext } from "react";
import "./cart.css";
import Fast from "./Fast";
import { MartContext } from "./Mart";
import { NavLink } from "react-router-dom";

const ContextMart = () => {
  const { item, totalAmount } = useContext(MartContext);
  return (
    <div>
      {item.map((event) => {
        return <Fast key={event.id} {...event} />;
      })}
      <div>
        <div className="downside">
          <h5>
            Total(INR): <span>{totalAmount}₹</span>
          </h5>
          <p>
            {" "}
            <NavLink className="check" id="ch" to="/checkout">
              checkout
            </NavLink>{" "}
          </p>
          <button id="d5" className="c5">
            {" "}
            <NavLink className="active_class" to="/cart">
              cancel
            </NavLink>{" "}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ContextMart;
