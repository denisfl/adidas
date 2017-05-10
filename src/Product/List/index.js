import React, { Component } from 'react';
import './styles.css';
import ProductCard from './Card.js';
import ProductImgAntNickel from './product-01.jpg';
import ProductImgZebraLead from './product-02.jpg';
import ProductImgCowSteel from './product-03.jpg';

class ProductList extends Component {
  render() {
    return (
      <div className="products">
        <div className="row">
          <div className="col-xs-4">
            <ProductCard price="230" imgSrc={ProductImgAntNickel} hasSale />
          </div>
          <div className="col-xs-4">
            <ProductCard price="170" imgSrc={ProductImgZebraLead} hasSale />
          </div>
          <div className="col-xs-4">
            <ProductCard price="180" imgSrc={ProductImgCowSteel} />
          </div>
          <div className="col-xs-4">
            <ProductCard price="170" imgSrc={ProductImgCowSteel} hasSale />
          </div>
          <div className="col-xs-4">
            <ProductCard price="230" imgSrc={ProductImgZebraLead} hasSale />
          </div>
          <div className="col-xs-4">
            <ProductCard price="170" imgSrc={ProductImgCowSteel} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
      