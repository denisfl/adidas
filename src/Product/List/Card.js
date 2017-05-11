import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Label from '../../Label';

const ProductCard = ({ hasSale, imgSrc, price, url }) => {
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
      <Link to={url} className="products-item-link">${price}</Link>
    </div>
  );
}

export default ProductCard;