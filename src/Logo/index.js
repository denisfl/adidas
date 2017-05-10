import React, { Component } from 'react';
import './styles.css';
import Img from './logo.png';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img
          className="logo-thumb"
          src={Img}
          srcSet={`${require('./logo@2x.png')} 2x, ${require('./logo@3x.png')} 3x`}
          alt="Adidas logo" />
      </div>
    );
  }
}

export default Logo;
