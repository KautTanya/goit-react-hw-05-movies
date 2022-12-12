import PropTypes from 'prop-types';
import {
  List,
  FilmsName,
  Item,
  MovieInfoWrap,
  MovieInfo,
} from './MovieList.styled.js';
import defaultImg from '../../img/poster-default.jpg';

export const MovieList = ({ movies, state }) => {
  return (
    <>
      <List>
        {movies.map(({ id, poster_path, title, release_date }) => {
          const date = release_date.slice(0, 4);
          return (
            <Item key={id}>
              <FilmsName to={`/movies/${id}`} state={state}>
                <MovieInfoWrap>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : defaultImg
                    }
                    alt={title}
                  />
                  <MovieInfo>"{title}"</MovieInfo>
                  <MovieInfo>{date}</MovieInfo>
                </MovieInfoWrap>
              </FilmsName>
            </Item>
          );
        })}
      </List>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
  state: PropTypes.object,
};
