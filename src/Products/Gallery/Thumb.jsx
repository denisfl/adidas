import React from 'react';
import { Thumb } from './styled';

export default ({ src, isSelected }) => (
  <Thumb isSelected={isSelected}>
    <img src={src} alt="Product" />
  </Thumb>
);
