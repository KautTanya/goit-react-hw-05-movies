import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { serverSearch } from '../../API';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MovieList } from 'components/MovieList/MovieList';
import { Section } from 'pages/Home/Home.styled';
import { Loader } from '../../components/Loader/Loader';
import { LoadMore } from 'components/LoadMore/LoadMore';

export default function Movies() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const movieName = searchParams.get('query');

    if (!movieName) {
      return;
    }

    (async function getMovieName() {
      try {
        setIsLoading(true);
        const moviesByName = await serverSearch(movieName, page);
        setMovies(prev => [...prev, ...moviesByName.results]);

        setTotal(moviesByName.total_pages);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        console.log(error.message);
      }
    })();
  }, [searchParams, page]);

  const updateQuery = inputValue => {
    setMovies([]);
    setPage(1);
    setTotal(null);
    setSearchParams({ query: inputValue });
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <main>
        <Section>
          <SearchForm updateQuery={updateQuery} />
          {isLoading && <Loader />}
          {movies.length > 0 && !isLoading && (
            <>
              <div>
                <MovieList movies={movies} state={{ from: location }} />
              </div>
            </>
          )}
          {total > 1 && page < total && !isLoading && (
            <LoadMore loadMore={loadMore} />
          )}
        </Section>
      </main>
    </>
  );
}
