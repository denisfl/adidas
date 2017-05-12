import styled from 'styled-components';

export const Wrapper = styled.aside`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;

  > svg {
    width: 28px;
    height: 30px;
  }
`;

export const Input = styled.input`
  padding: 10px 10px 10px 55px;
  width: 100%;
  height: 54px;
  box-sizing: border-box;
  background-color: transparent;
  color: ##393939;
  border: none;
  border-bottom: 4px solid #373737;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;

  &:focus {
    outline: none;
    border-bottom-color: #DCDCDC;
  }
`;