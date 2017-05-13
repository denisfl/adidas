import React from 'react';
// import './styles.css';
import Label from '../../Label';
import { Item, Cover, LabelWrapper, ItemLink } from './styled';

const ProductCard = ({ hasSale, imgSrc, price, url }) => (
  <Item>
    <Cover>
      {hasSale &&
        <LabelWrapper>
          <Label />
        </LabelWrapper>}
      <img src={imgSrc} alt="Product" />
    </Cover>
    <ItemLink to={url} hasSale={hasSale}>${price}</ItemLink>
  </Item>
);

export default ProductCard;
