import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import SVGSprite from './SVGSprite';
import Sidebar from './Sidebar';
import Products from './Products/List';
import Product from './Products/Item';

const Layout = styled.div`
  padding-top: 65px;
  min-height: 100vh;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 28.75% auto;
    padding-top: 0;
  }
`;

export default () => (
  <Router>
    <Layout>
      <SVGSprite />
      <Sidebar />
      <div>
        <Route exact path="/" component={Products} />
        <Route path="/item" component={Product} />
      </div>
    </Layout>
  </Router>
);
