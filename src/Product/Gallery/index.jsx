import React from 'react';
import GalleryCover from './Cover';
import GalleryThumb from './Thumb';
import GalleryMoreButton from './MoreButton';
import ImgCover from './images/product-details-cover.jpg';
import './styles.css';

export default () => (
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
