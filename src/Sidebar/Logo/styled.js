import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 18px;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    padding-bottom: 18px;
    justify-content: center;
  }
`;

export const Logo = styled.svg`
  width: 44px;
  height: 30px;
  fill: #FFFFFF;

  @media (min-width: 1024px) {
    width: 76px;
    height: 76px;
  }
`;

export const Menu = styled.button`
  padding: 0;
  width: 53px;
  height: 30px;
  border: none;
  background-color: transparent;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MenuIcon = styled.svg`
  width: 53px;
  height: 30px;
  fill: #FFFFFF;
`;
