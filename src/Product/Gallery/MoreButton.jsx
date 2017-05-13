import React from 'react';
import { MoreButton } from './styled';

export default () => (
  <MoreButton>
    <svg><use xlinkHref="#icon-more" /></svg>
    <span>see more photos</span>
  </MoreButton>
);
