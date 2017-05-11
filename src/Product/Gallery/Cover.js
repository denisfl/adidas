import React from 'react';

export default ({ imgSrc }) => {
  return (
    <div className="product-gallery-cover">
      <img className="product-gallery-img" src={imgSrc} alt="Product cover" />
    </div>
  );
}