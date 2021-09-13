import React, { createContext, useReducer, useEffect } from "react";
import Data from "../data/feeds.json";
import ContextMart from "./ContextMart";
import { reducer } from "./reducer";

export const MartContext = createContext();

const initialState = {
  item: Data,
  totalAmount: 0,
  totalItem: 0
};
const Mart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // to delete the indiviual item from the cart
  const removeItem = (id) => {
    return dispatch({
      type: "remove_item",
      payload: id
    });
  };
  const clear = () => {
    return dispatch({
      type: "clear_item"
    });
  };
  const increment = (id) => {
    return dispatch({
      type: "Increment",
      payload: id
    });
  };
  const decrement = (id) => {
    return dispatch({
      type: "Decrement",
      payload: id
    });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    console.log("awesome");
  }, [state.item]);

  return (
    <>
      <MartContext.Provider
        value={{ ...state, removeItem, clear, increment, decrement }}
      >
        <ContextMart />
      </MartContext.Provider>
    </>
  );
};
export default Mart;
