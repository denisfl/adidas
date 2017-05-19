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
  margin-right: 14px;
  width: 62px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  box-shadow: ${p => (p.selected ? '0 0 0 5px #E8E8EA' : 'none')};

  @media (min-width: 768px) {
    margin-right: 2.3%;
    width: 148px;
    height: 118px;
  }

  > img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
