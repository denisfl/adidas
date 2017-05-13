import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 23px;
  padding-right: 23px;
`;

export const Item = styled.div`
  margin-bottom: 17px;
  padding: 9px;
  background-color: #F4F4F4;
`;

export const Cover = styled.div`
  position: relative;
  margin-bottom: 12px;
  max-height: 193px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;

  > img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const LabelWrapper = styled.div`
  position: absolute;
  top: 7px;
  right: 9px;
`;

export const ItemLink = styled(Link)`
  display: block;
  padding: 23px 10px 27px;
  background-color: #FFFFFF;
  text-align: center;
  font-family: 'AvenirNext', Helvetica, Arial, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: ${p => (p.hasSale ? '#FFFFFF' : '0E0E0E')};
  background-image: ${p => (p.hasSale ? 'linear-gradient(107deg, #0C09BF, #966DD8)' : 'none')};
`;
