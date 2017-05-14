import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  vertical-align: middle;
  margin-right: 25px;
`;

const Button = styled.button`
  margin-left: 13px;
  padding: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  font-size: 0;
  color: transparent;
  background-color: ${p => (p.color ? `${p.color};` : 'transparent')};

  &:first-child {
    margin-left: 0;
  }
`;

export default () => (
  <Wrapper>
    <Button color="#C5C5C5">Серый</Button>
    <Button color="#4D87CA">Синий</Button>
    <Button color="#4A4A4A">Темно-серый</Button>
    <Button color="#E0E0E0">Светло-серый</Button>
  </Wrapper>
);
