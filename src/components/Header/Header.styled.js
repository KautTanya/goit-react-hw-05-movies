import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  background-color: #65b5fc;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  justify-content: center;
`;

const LinkStyled = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  background-color: transparent;
  color: #0d257b;
  display: block;
  transform: scale(1);
  transition: transform 300ms ease, color 300ms ease;

  &.active {
    color: #0e00d1;
    transform: scale(1.1);
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export { Header, Nav, LinkStyled };
