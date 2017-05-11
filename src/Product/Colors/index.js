import './styles.css';
import React, { Component } from 'react';

class Colors extends Component {
  render() {
    return (
      <div className="product-colors">
        <button className="product-color product-color--gray">Серый</button>
        <button className="product-color product-color--blue">Синий</button>
        <button className="product-color product-color--dark">Темно-серый</button>
        <button className="product-color product-color--gray-light">Светло-серый</button>
      </div>
    );
  }
}

export default Colors;
