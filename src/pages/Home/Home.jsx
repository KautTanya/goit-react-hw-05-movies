import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { MovieList } from '../../components/MovieList/MovieList';
import { serverHitsList } from '../../API';
import { Title, Section } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const trendingMovies = await serverHitsList();
        setMovies(trendingMovies);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <main>
          <Section>
            <Title>Trending today</Title>
            {movies && <MovieList movies={movies} state={location} />}
          </Section>
        </main>
      )}
    </>
  );
}
