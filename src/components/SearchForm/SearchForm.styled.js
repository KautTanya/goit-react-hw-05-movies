import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 400px;
  padding: 10px;
  font-weight: 500;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #0d257b;
  color: #0d257b;
  transition: outline 300ms ease;

  &:focus,
  &:hover {
    outline: 2px solid #0e00d1;
  }

  &::placeholder {
    color: #4c70ac;
  }
`;

const SearchBtn = styled.button`
  background-color: #4c70ac;
  padding: 10px 30px;
  border-radius: 4px;
  border: 1px solid #0d257b;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 300ms ease;

  &:focus,
  &:hover {
    background-color: #0e00d1;
  }
`;

export { Form, Input, SearchBtn };
