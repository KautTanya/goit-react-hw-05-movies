import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MainCard,
  MovieInfoWrap,
  Title,
  InfoTitle,
  Text,
  Wrapper,
  Item,
  StyledLink,
} from './MovieCard.styled.js';

import defaultImg from '../../img/poster-default.jpg';

export const MovieCard = ({ movie }) => {
  const { title, poster_path, overview, release_date, vote_average, genres } =
    movie;
  const location = useLocation();

  return (
    <>
      <MainCard>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : defaultImg
          }
          alt={`${title}`}
          width="300"
        />
        <MovieInfoWrap>
          <Title>{title}</Title>
          <Text>
            <InfoTitle>Overview:</InfoTitle>
            {overview}
          </Text>
          <Text>
            <InfoTitle>Genres:</InfoTitle>
            {genres
              ?.map(({ name }) => {
                return name;
              })
              .join(', ')}
          </Text>
          <Text>
            <InfoTitle>Release date:</InfoTitle>
            {release_date}
          </Text>
          <Text>
            <InfoTitle>Vote average:</InfoTitle>
            {vote_average}
          </Text>
          <Wrapper>
          <Item>
            <StyledLink to="cast" state={{ from: location.state.from }}>
              Cast
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="reviews" state={{ from: location.state.from }}>
              Reviews
            </StyledLink>
          </Item>
        </Wrapper>
        </MovieInfoWrap>
     
      </MainCard>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.array,
  }).isRequired,
};
