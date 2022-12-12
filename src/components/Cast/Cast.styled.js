import styled from 'styled-components';

const Title = styled.h3`
  font-size: 40px;
  text-transform: uppercase;
  color: #05109e;
  text-align: center;
  margin-bottom: 40px;
`;

const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const Item = styled.li`
  width: 150px;
  height: 305px;
`;

const NameActor = styled.p`
  text-align: center;
  color: #153f65;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const WorkActor = styled.p`
  text-align: center;
  color: #4c70ac;
`;

export { Title, CastList, Item, NameActor, WorkActor };
