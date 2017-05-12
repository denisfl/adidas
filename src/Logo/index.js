import React from 'react';
import logo from './logo.png';
import './styles.css';

export default () => (
  <div className="logo">
    <img
      className="logo-thumb"
      src={logo}
      srcSet={`${require('./logo@2x.png')} 2x, ${require('./logo@3x.png')} 3x`}
      alt="Adidas logo" />
  </div>
);
