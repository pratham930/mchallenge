import React, { useContext } from "react";
import { MartContext } from "./Mart";
import "./cart.css";

const Fast = ({ id, name, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(MartContext);
  return (
     <>
    <div className="grid-container">
       
    <div className=""><h5> {name}</h5></div>
       
         <div > {quantity} </div>
    
   
    
       <div className='bnt' >  <button className='btn1' onClick = {()=>increment(id)}>+</button>
         <button className='btn2' onClick = {()=>decrement(id)}>-</button>
         <button className='btn3' onClick = {()=>removeItem(id)}>delete</button></div>
     
     </div>
     </>
  );
};
export default Fast;
