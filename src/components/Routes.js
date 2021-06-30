import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Quote from '../pages/Quote';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/calculator" component={App} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
