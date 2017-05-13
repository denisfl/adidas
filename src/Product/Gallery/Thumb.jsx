import React from 'react';

export default ({ src }) => (
  <button className="product-gallery-tumb">
    <img className="product-gallery-img" src={src} alt="Product" />
  </button>
);
