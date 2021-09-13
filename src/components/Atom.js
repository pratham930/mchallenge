import React, { useContext } from "react";
import { CartContext } from "./Cart";
import "./cart.css";

const Atom = ({ id, name, image, price, quantity }) => {
  const { increment, decrement } = useContext(CartContext);
  return (
    <>
      <div className="grid-containers">
        <div className="grid-items">
          <img className="image " alt="food" src={`/assets/${image}`} />
          <h5 ClassName="card-title">{name}</h5>
          <p ClassName="card-text">price:{price}</p>

          <button className="btn1" onClick={() => increment(id)}>
            +
          </button>
          <button className="btn2" onClick={() => decrement(id)}>
            -
          </button>
        </div>
      </div>
    </>
  );
};
export default Atom;
