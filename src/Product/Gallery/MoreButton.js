import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <button className="product-gallery-more">
        <svg><use xlinkHref="#icon-more"></use></svg>
        <span>see more photos</span>
      </button>
    );
  }
}

export default Gallery;
      