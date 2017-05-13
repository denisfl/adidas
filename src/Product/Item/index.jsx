import React, { Component } from 'react';
import Label from '../../Label';
import Colors from '../Colors';
import Gallery from '../Gallery';
import Price from './Price';
import Title from './Title';
import './styles.css';

class ProductItem extends Component {
  render() {
    return (
      <div className="product">
        <div className="product-header">
          <div className="product-header-col">
            <Title title="ULTRA BOOST" />
            <button className="product-save">Save</button>
          </div>
          <div className="product-header-col product-header-options">
            <div>
              <Colors />
              <Label />
            </div>
            <Price value="170" />
          </div>
        </div>
        <Gallery />
        <div className="product-description">
          <p>
            <a href="http://www.adidas.ru/">Adidas</a>
            {' '}
            is a German multinational corporation, headquartered in Herzogenaurach, Germany,
            {' '}
            that designs and manufactures shoes, clothing and accessories.
          </p>
        </div>
        <div className="product-footer">
          <button className="product-buy">Buy now</button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
