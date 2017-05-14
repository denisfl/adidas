import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 20px 23px 0;
  font-family: 'AvenirNext', Helvetica, Arial, sans-serif;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  z-index: 2;
  left: 23px;
  right: 23px;
`;

export const HeaderCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${p => (p.options ? '15px' : '0')};
  align-items: ${p => (p.options ? 'flex-end' : 'flex-start')};
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  width: 350px;
  line-height: 1.1;
  font-size: 64px;
  color: #393939;
`;

export const SaveButton = styled.button`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #E3E3E3;
  font-size: 18px;
  color: #FFFFFF;
  border: none;
  text-transform: uppercase;
`;

export const Price = styled.h2`
  margin: 27px 0 0;
  padding: 0;
  font-size: 80px;
  color: #E3E3E3;
`;

export const Description = styled.div`
  margin-bottom: 31px;
  font-size: 33px;
  color: #D8D8D8;
  
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
  margin-right: -23px;
  margin-left: -23px;
`;

export const BuyButton = styled.button`
  display: block;
  padding: 36px 0;
  width: 100%;
  text-align: center;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  border: none;
  color: #FFFFFF;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
`;
