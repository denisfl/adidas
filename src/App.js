import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SVGSprite from './SVGSprite';
import Sidebar from './Sidebar';
import Products from './Product/List';
import Product from './Product/Item';

export default () => (
  <Router>
    <div className="app-layout">
      <SVGSprite />
      <Sidebar />
      <div className="app-main">
        <Route exact path="/" component={Products}/>
        <Route path="/item" component={Product}/>
      </div>
    </div>
  </Router>
);