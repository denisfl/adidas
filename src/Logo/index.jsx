import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const Wrapper = styled.div`
  margin-bottom: 18px;
  text-align: center;
`;

const Img = styled.img`
  width: 76px;
  height: 76px;
  object-fit: contain;
`;

export default () => (
  <Wrapper>
    <Img
      src={logo}
      srcSet={`${require('./logo@2x.png')} 2x, ${require('./logo@3x.png')} 3x`}
      alt="Adidas logo"
    />
  </Wrapper>
);
