import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { serverActors } from '../../API';
import { Section } from '../../pages/Home/Home.styled.js';
import { Loader } from '../../components/Loader/Loader';

import {
  Title,
  CastList,
  Item,
  NameActor,
  WorkActor,
} from './Cast.styled.js';
import defaultImg from '../../img/anonymous.jpg';

export default function Cast() {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function getActors() {
      setIsLoading(true);
      try {
        const movieCasts = await serverActors(movieId);
        setCastList(movieCasts);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  return (
    <Section>
      {isLoading && <Loader />}
      {!isLoading && castList.length > 0 && (
        <>
          <Title>Cast</Title>
          <CastList>
            {castList.map(({ id, name, character, profile_path }) => {
              return (
                <Item key={id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/original${profile_path}`
                        : defaultImg
                    }
                    alt={`${name}`}
                    width="150"
                  />

                  <NameActor>{name}</NameActor>
                  <WorkActor>{character}</WorkActor>
                </Item>
              );
            })}
          </CastList>
        </>
      )}
    </Section>
  );
}
