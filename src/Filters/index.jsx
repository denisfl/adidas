import React from 'react';
import filterIcon from './filter.png';
import Sex from './Sex';
import Size from './Size';
import { Wrapper, Icon } from './styled';

export default () => (
  <Wrapper>
    <Icon>
      <img
        src={filterIcon}
        srcSet={`${require('./filter@2x.png')} 2x, ${require('./filter@3x.png')} 3x`}
        alt="Filter icon"
      />
    </Icon>
    <Sex />
    <Size />
  </Wrapper>
);
