import React from 'react';

const GalleryThumb = ({ imgSrc }) => {
  return (
      <button className="product-gallery-tumb">
        <img className="product-gallery-img" src={imgSrc} alt="Product" />
    </button>
  );
}

export default GalleryThumb;