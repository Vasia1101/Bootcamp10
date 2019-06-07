import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Cart from "../Cart/CartContainer";
import Products from "../Products/ProductsContainer";
import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.container}>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/">Cart</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/" component={Cart} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
