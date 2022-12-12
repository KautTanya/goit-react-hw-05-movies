import { useLocation } from 'react-router-dom';
import { Wrap } from './ErrorPage.styled.js';
import { BackLink } from '../MovieInfo/MovieInfo.styled.js';

export default function ErrorPage() {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <main>
        <BackLink to={backLinkHref}>Go back</BackLink>
        <Wrap>Ooops.... This page does not exist</Wrap>
      </main>
    </>
  );
}
