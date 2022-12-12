import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  padding: 8px;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  background-color: transparent;
  color: #0d257b;
  border: 1px solid;
  border-color: #0d257b;

  transform: scale(1);
  transition: color 300ms ease, outline 300ms ease;

  &:hover,
  &:focus {
    outline: 2px solid #0e00d1;
    color: #0e00d1;
  }
`;

export { BackLink };
