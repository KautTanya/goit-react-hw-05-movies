import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: block;
  padding: 15px 40px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #05109e;
  border-radius: 4px;
  color: #ffffff;
  background-color: #153f65;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  width: 200px;
  transition: background-color 300ms ease;

  &:hover,
  &:focus {
    background-color: #05109e;
    border: 3px solid #05109e;
  }
`;
