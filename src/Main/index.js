import './styles.css';
import React, { Component } from 'react';
import Filters from '../Filters';
import Products from '../Product/List';

class Main extends Component {
  render() {
    return (
      <div className="app-main">
        <Filters />
        <Products />
      </div>
    );
  }
}

export default Main;