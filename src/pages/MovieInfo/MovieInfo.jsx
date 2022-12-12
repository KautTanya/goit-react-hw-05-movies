import { useParams, useLocation, Outlet } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { serverMovie } from '../../API';
import { Loader } from '../../components/Loader/Loader';
import { Section } from '../Home/Home.styled.js';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { BackLink } from './MovieInfo.styled.js';

export default function MovieInfo() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    (async function getMovieId() {
      setIsLoading(true);
      try {
        const movieById = await serverMovie(movieId);

        setMovie(movieById);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <main>
      {isLoading && <Loader />}
      {!isLoading && (
        <Section>
          <BackLink to={backLinkHref}>Go back</BackLink>
          <MovieCard movie={movie} />
        </Section>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
