import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainCard = styled.div`
  display: flex;
  gap: 40px;
`;

const MovieInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 25px;
  padding-top: 30px;
  line-height: 1.7;
`;

const Title = styled.h2`
  font-size: 30px;
  color: #0d257b;
  letter-spacing: 5px;
`;

const InfoTitle = styled.span`
  color: #4c70ac;
  font-weight: 900;
  padding-right: 10px;
`;
const Text = styled.p`
color: #4c70ac;

`
const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 400px;
  height: 60px;
`;

const Item = styled.li`
  padding: 8px;
  background-color: #4c70ac;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: #0e00d1;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  font-size: 18px;
  text-decoration: none;
`;

export {
  MainCard,
  MovieInfoWrap,
  InfoTitle,
  Title,
  Text,
  Wrapper,
  StyledLink,
  Item,
};
