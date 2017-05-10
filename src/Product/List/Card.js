import React from 'react';
import './styles.css';
import Label from '../../Label'

const ProductCard = ({ price, imgSrc, hasSale }) => {
  return (
    <div className="products-item has-sale">
      <div className="products-item-cover">
        { hasSale &&
          <div className="products-item-label">
            <Label />
          </div>
        }
        <img className="products-item-cover-thumb" src={imgSrc} alt="Product" />
      </div>
      <a href="#" className="products-item-link">${price}</a>
    </div>
  );
}

export default ProductCard;
      