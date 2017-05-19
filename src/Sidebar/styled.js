import styled from 'styled-components';

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #0D0D0D;

  @media (min-width: 1024px) {
    position: static;
    padding-left: 22px;
    padding-right: 22px;
  }
`;

export const Header = styled.div`
  padding-top: 17px;

  @media (min-width: 1024px) {
    padding-top: 34px;
  }
`;

export const Main = styled.div`

  @media (min-width: 1024px) {
    padding-top: 75px;
  }
  @media (min-width: 1024px) {
    padding-top: 151px;
  }
`;
