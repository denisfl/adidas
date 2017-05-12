import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SVGSprite from './SVGSprite';
import Sidebar from './Sidebar';
import Products from './Product/List';
import Product from './Product/Item';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 28.75% auto;
`;

export default () => (
  <Router>
    <Layout>
      <SVGSprite />
      <Sidebar />
      <div>
        <Route exact path="/" component={Products}/>
        <Route path="/item" component={Product}/>
      </div>
    </Layout>
  </Router>
);