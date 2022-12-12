import styled from 'styled-components';

const Title = styled.h3`
  font-size: 40px;
  text-transform: uppercase;
  color: #05109e;
  text-align: center;
  margin-bottom: 40px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoMessage = styled.p`
  color: #4c70ac;
  font-size: 20px;
`;

const Text = styled.p`
  color: #4c70ac;
  font-size: 18px;
  line-height: 1.7;
`;

const DateReview = styled.p`
  color: #0d257b;
  font-size: 14px;
  margin-bottom: 15px;
`;

const AutorReview = styled.p`
  color: #0d257b;
  font-size: 24px;
  margin-bottom: 15px;
`;
export { Title, List, InfoMessage, Text, DateReview, AutorReview };
