import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 11px;
  padding: 15px 15px 6px;
  border-bottom: 5px solid #F2F2F2;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    padding: 11px 23px 10px;
  }
`;

export const Icon = styled.div`
  display: none;

  > img {
    width: 40px;
    height: 33px;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 29px;
    width: 55px;
    height: 55px;
    background-color: #EBEBEB;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }

  & + & {
    @media (min-width: 1024px) {
      margin-left: 72px;
    }
  }
`;

export const Label = styled.div`
  margin-right: 6px;
  color: #4D42F8;
  text-transform: uppercase;
  font-family: 'AvenirNext', Helvetica, Arial, sans-serif;
  font-weight: bold;

  @media (min-width: 1024px) {
    margin-right: 18px;
  }
`;

export const Button = styled.button`
  margin-left: 10px;
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${props => (props.isActive ? '#4D42F8' : '#D7D7D7')};
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'AvenirNext', Helvetica, Arial, sans-serif;
  font-weight: bold;

  &:hover {
    color: #4949aa;
  }

  &:first-child {
    margin-left: 0;
  }
`;
