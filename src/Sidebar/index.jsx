import React from 'react';
import Logo from '../Logo';
import Search from '../Search';
import Menu from '../Menu';
import { Wrapper, Header, Main } from './styled';

export default () => (
  <Wrapper>
    <Header>
      <Logo />
      <Search />
    </Header>
    <Main>
      <Menu />
    </Main>
  </Wrapper>
);
