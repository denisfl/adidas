import './styles.css';
import React, { Component } from 'react';
import ProductCard from './Card.js';

class ProductList extends Component {
  render() {
    return (
      <div className="products">
        <div className="row">
          <div className="col-xs-4">
            <ProductCard price="230" imgSrc={require('./product-01.jpg')} hasSale />
          </div>
          <div className="col-xs-4">
            <ProductCard price="170" imgSrc={require('./product-02.jpg')} hasSale />
          </div>
          <div className="col-xs-4">
            <ProductCard price="180" imgSrc={require('./product-03.jpg')} />
          </div>
          <div className="col-xs-4">
            <ProductCard price="170" imgSrc={require('./product-02.jpg')} hasSale />
          </div>
          <div className="col-xs-4">
            <ProductCard price="230" imgSrc={require('./product-03.jpg')} hasSale />
          </div>
          <div className="col-xs-4">
            <ProductCard price="170" imgSrc={require('./product-01.jpg')} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
      