import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Menu = styled.nav`
  text-align: center;
  text-transform: uppercase;

  a:hover {
    text-decoration: underline;
  }
`;

export const MenuItem = styled.div`
  margin-bottom: 29px;
`;

export const SubMenu = styled.nav`
  margin-top: 37px;
  margin-bottom: 56px;
`;

export const SubMenuItem = styled.div`
  margin-bottom: 26px;
`;

export const MenuLink = styled(Link)`
  position: relative;
  font-weight: bold;
  font-family: 'AvenirNext', Helvetica, Arial, sans-serif;
  color: ${p => (p.isActive ? '#FFFFFF' : '#2F2F2F')};

  &:after {
    content: ${p => (p.isActive ? '""' : 'none')};
    position: absolute;
    right: -20px;
    top: 12px;
    width: 14px;
    height: 9px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNCA5Ij4gICAgPGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxyZWN0IHdpZHRoPSIzIiBoZWlnaHQ9IjkiIHg9IjMiIHJ4PSIxLjUiIHRyYW5zZm9ybT0icm90YXRlKC00NSA0LjUgNC41KSIvPiAgICAgICAgPHJlY3Qgd2lkdGg9IjMiIGhlaWdodD0iOSIgeD0iOCIgcng9IjEuNSIgdHJhbnNmb3JtPSJyb3RhdGUoNDcgOS41IDQuNSkiLz4gICAgPC9nPjwvc3ZnPg==');
  }
`;

export const SubMenuLink = styled(Link)`
  color: #3C3C3C;

  .is-active & {
    color: #FFFFFF;
  }
`;
