import React, { Component } from 'react';
import './styles.css';
import GalleryCover from './Cover.js';
import GalleryThumb from './Thumb.js';
import GalleryMoreButton from './MoreButton.js';
import ImgCover from './images/product-details-cover.jpg'
import ImgThumb_01 from './images/product-details-thumb-01.jpg'
import ImgThumb_02 from './images/product-details-thumb-02.jpg'
import ImgThumb_03 from './images/product-details-thumb-03.jpg'
import ImgThumb_04 from './images/product-details-thumb-04.jpg'

class Gallery extends Component {
  render() {
    return (
      <div className="product-gallery">
        <GalleryCover imgSrc={ImgCover} />
        <div className="product-gallery-tumbs">
          <GalleryThumb imgSrc={ImgThumb_01} />
          <GalleryThumb imgSrc={ImgThumb_02} />
          <GalleryThumb imgSrc={ImgThumb_03} />
          <GalleryThumb imgSrc={ImgThumb_04} />
          <GalleryMoreButton />
        </div>
      </div>
    );
  }
}

export default Gallery;
      