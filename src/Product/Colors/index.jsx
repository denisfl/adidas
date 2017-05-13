import React from 'react';
import './styles.css';

export default () => (
  <div className="product-colors">
    <button className="product-color product-color--gray">Серый</button>
    <button className="product-color product-color--blue">Синий</button>
    <button className="product-color product-color--dark">Темно-серый</button>
    <button className="product-color product-color--gray-light">
      Светло-серый
    </button>
  </div>
);
