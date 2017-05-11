import './styles.css';
import React, { Component } from 'react';
import GalleryCover from './Cover.js';
import GalleryThumb from './Thumb.js';
import GalleryMoreButton from './MoreButton.js';
import ImgCover from './images/product-details-cover.jpg';

class Gallery extends Component {
  render() {
    return (
      <div className="product-gallery">
        <GalleryCover imgSrc={ImgCover} />
        <div className="product-gallery-tumbs">
          <GalleryThumb imgSrc={require('./images/product-details-thumb-01.jpg')} />
          <GalleryThumb imgSrc={require('./images/product-details-thumb-02.jpg')} />
          <GalleryThumb imgSrc={require('./images/product-details-thumb-03.jpg')} />
          <GalleryThumb imgSrc={require('./images/product-details-thumb-04.jpg')} />
          <GalleryMoreButton />
        </div>
      </div>
    );
  }
}

export default Gallery;