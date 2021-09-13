import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout.js";
import Singup from "./components/Singup";
import Mart from "./components/Mart";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Checkout" component={Checkout} />
          <Route exact path="/singup" component={Singup} />
          <Route exact path="/mart" component={Mart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
const Home = () => {
  return (
    <div className="home">
      <div className="mar">
        <h4>
          <img src="/assets/restaurant_24px.svg" alt="" srcset="" />
          Swasch Restaurant
        </h4>
      </div>

      <h5 id="wel"> Welcome to Food's kichten</h5>
      <button className="now">
        <NavLink className="active_class" id="nem" to="/cart">
          Menu
        </NavLink>
      </button>
    </div>
  );
};

export default App;
