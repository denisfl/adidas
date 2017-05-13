import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 23px 35px;
`;

export const FiltersIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 29px;
  width: 55px;
  height: 55px;
  background-color: #EBEBEB;

  > img {
    width: 40px;
    height: 33px;
  }
`;

export const FiltersGroup = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-left: 72px;
  }
`;

export const Label = styled.div`
  margin-right: 18px;
  color: #4D42F8;
  text-transform: uppercase;
  font-family: 'AvenirNext', Helvetica, Arial, sans-serif;
  font-weight: bold;
`;

export const Button = styled.button`
  margin-left: 16px;
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
