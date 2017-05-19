import React from 'react';
import Cover from './Cover';
import Thumb from './Thumb';
import ImgCover from './images/product-details-cover.jpg';
import { Wrapper, List } from './styled';

export default () => (
  <Wrapper>
    <Cover src={ImgCover} />
    <List>
      <Thumb
        isSelected
        src={require('./images/product-details-thumb-01.jpg')}
      />
      <Thumb src={require('./images/product-details-thumb-02.jpg')} />
      <Thumb src={require('./images/product-details-thumb-03.jpg')} />
      <Thumb src={require('./images/product-details-thumb-04.jpg')} />
    </List>
  </Wrapper>
);
