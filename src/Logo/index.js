import React from 'react';
import logo from './logo.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 18px;
  text-align: center;
`

const Img = styled.img`
  width: 76px;
  height: 76px;
  object-fit: contain;
`

export default () => (
  <Wrapper>
    <Img
      src={logo}
      srcSet={`${require('./logo@2x.png')} 2x, ${require('./logo@3x.png')} 3x`}
      alt="Adidas logo" />
  </Wrapper>
);
