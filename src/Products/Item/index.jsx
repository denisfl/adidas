import React from 'react';
import BuyButton from './BuyButton';
import Colors from './Colors';
import Description from './Description';
import Gallery from './Gallery';
import Label from '../../Label';
import Price from './Price';
import Title from './Title';
import { Wrapper, Header, HeaderCol, SaveButton } from './styled';

export default () => (
  <Wrapper>
    <Header>
      <HeaderCol>
        <Title title="ULTRA BOOST" />
        <SaveButton>Save</SaveButton>
      </HeaderCol>
      <HeaderCol options>
        <div>
          <Colors />
          <Label />
        </div>
        <Price value="170" />
      </HeaderCol>
    </Header>
    <Gallery />
    <Description />
    <BuyButton />
  </Wrapper>
);
