import React from 'react';
import { Wrapper, Logo, Menu, MenuIcon } from './styled';

export default () => (
  <Wrapper>
    <Logo>
      <use xlinkHref="#icon-logo" />
    </Logo>
    <Menu>
      <MenuIcon>
        <use xlinkHref="#icon-menu" />
      </MenuIcon>
    </Menu>
  </Wrapper>
);
