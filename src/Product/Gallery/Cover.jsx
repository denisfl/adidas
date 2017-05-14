import React from 'react';
import { Cover, CoverImg } from './styled';

export default ({ src }) => (
  <Cover>
    <CoverImg src={src} alt="Product cover" />
  </Cover>
);
