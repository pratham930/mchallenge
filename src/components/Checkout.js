import React from "react";
import { NavLink } from "react-router-dom";
import "./cart.css";

const Checkout = () => {
  return (
    <div className="lastpage">
      <h1>THANK YOU FOR YOUR ORDER</h1>

      <button className="ord">
        <NavLink className="active_class" to="/cart">
          Order Again
        </NavLink>
      </button>
    </div>
  );
};

export default Checkout;
