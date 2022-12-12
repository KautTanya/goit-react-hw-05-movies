import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle.js';
import { Header, Nav, LinkStyled } from './Header.styled.js';
import { Section } from 'pages/Home/Home.styled.js';
import { Loader } from '../Loader/Loader';

export default function HeaderMain() {
  return (
    <>
      <Header>
        <Section>
          <Nav>
            <LinkStyled to="/" end="true">
              Home
            </LinkStyled>
            <LinkStyled to="/movies">Movies</LinkStyled>
          </Nav>
        </Section>
      </Header>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
