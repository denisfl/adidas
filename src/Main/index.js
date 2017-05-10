import React, { Component } from 'react';
import './styles.css';
import Filters from '../Filters'
import ProductList from '../Product/List'

class Main extends Component {
  render() {
    return (
      <div className="app-main">
        <Filters />
        <ProductList />
      </div>
    );
  }
}

export default Main;
