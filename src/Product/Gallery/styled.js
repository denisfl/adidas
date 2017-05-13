import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 32px;
  margin-bottom: 33px;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
`;

export const Cover = styled.div`
  max-height: 525px;
  text-align: center;
`;

export const CoverImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const Thumb = styled.button`
  margin-right: 2.3%;
  width: 148px;
  height: 118px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  box-shadow: ${p => (p.selected ? '0 0 0 5px #E8E8EA' : 'none')};

  > img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const MoreButton = styled.button`
  margin-left: 33px;
  padding: 0;
  font-size: 14px;
  font-weight: 100;
  color: #C0C0C0;
  text-align: left;
  background-color: transparent;
  border: none;
  white-space: nowrap;

  > svg {
    display: inline-block;
    vertical-align: middle;
    width: 159px;
    height: 15px;
    fill: #E7E7E7;
  }

  >span {
    display: inline-block;
    vertical-align: middle;
    margin-left: 28px;
    width: 45px;
    white-space: normal;
  }
`;
