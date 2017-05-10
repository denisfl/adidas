import React from 'react';

const GalleryCover = ({ imgSrc }) => {
  return (
      <div className="product-gallery-cover">
        <img className="product-gallery-img" src={imgSrc} alt="Product cover" />
      </div>
  );
}

export default GalleryCover;

      
      