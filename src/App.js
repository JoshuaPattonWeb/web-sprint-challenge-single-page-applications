import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

//components used
import Home from '../pages/Home'
import Form from '../pages/form'
import Confirmation from '../pages/confirmation'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>HOT PIZZAS FRESH OUT THE OVEN</p>
    </>
    <Router>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link id='order-pizza' to='/pizza'>Form</Link>
      </div>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/pizza'>
        <Form />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
