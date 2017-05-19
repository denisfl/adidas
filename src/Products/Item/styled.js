import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 15px 15px 0;
  font-family: 'AvenirNext', Helvetica, Arial, sans-serif;

  @media (min-width: 1024px) {
    padding: 20px 23px 0;
  }
`;

export const Header = styled.div`
  font-weight: bold;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 2;
    left: 23px;
    right: 23px;
  }
`;

export const HeaderCol = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin-top: ${p => (p.options ? '15px' : '0')};
    align-items: ${p => (p.options ? 'flex-end' : 'flex-start')};
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    order: 2;

    @media (min-width: 1024px) {
      order: 1;
      justify-content: flex-start;
    }

    span {
      order: 1;

      @media (min-width: 1024px) {
        order: 2;
      }
    }
  }

`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  line-height: 1.1;
  font-size: 36px;
  color: #393939;

  @media (min-width: 1024px) {
    width: 350px;
    font-size: 64px;
  }
`;

export const SaveButton = styled.button`
  display: none;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #E3E3E3;
  font-size: 18px;
  color: #FFFFFF;
  border: none;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const Price = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 80px;
  color: #E3E3E3;
  order: 1;

  @media (min-width: 1024px) {
    margin-top: 27px;
    order: 2;
  }
`;

export const Description = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  color: #D8D8D8;

  @media (min-width: 1024px) {
    margin-bottom: 31px;
    font-size: 33px;
  }
  
  p {
    margin: 0;
    padding: 0;
    line-height: 1.52;
  }

  a {
    color: #6E6E6E;
  }
`;

export const BuyWrapper = styled.div`
  margin-right: -15px;
  margin-left: -15px;

  @media (min-width: 1024px) {
    margin-right: -23px;
    margin-left: -23px;
  }
`;

export const BuyButton = styled.button`
  display: block;
  padding: 25px 0;
  width: 100%;
  text-align: center;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  border: none;
  color: #FFFFFF;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;

  @media (min-width: 1024px) {
    padding-left: 36px;
    padding-right: 36px;
    font-size: 32px;
  }
`;
