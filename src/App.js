import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

//components used
import Home from "./pages/Home";
import Form from "./pages/form";
import required from "./pages/required";
import Confirmation from "./pages/confirmation";
import * as yup from "yup";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>HOT PIZZAS FRESH OUT THE OVEN</p>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pizza">
            <Form />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
