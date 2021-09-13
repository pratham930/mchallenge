import React, { useContext } from "react";
import { CartContext } from "./Cart";
import "./cart.css";

const Menu = ({ id, name, image, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div ClassName="card">
              <img className="image " alt="food" src={`/assets/${image}`} />

              <div ClassName="card-body">
                <h5 ClassName="card-title">{name}</h5>
                <p ClassName="card-text">price:{price}</p>
                <div>
                  {" "}
                  <input className="inp" type="text" placeholder={quantity} />
                </div>
                <div className="bnt">
                  {" "}
                  <button className="btn1" onClick={() => increment(id)}>
                    +
                  </button>
                  <button className="btn2" onClick={() => decrement(id)}>
                    -
                  </button>
                  <button className="btn3" onClick={() => removeItem(id)}>
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
