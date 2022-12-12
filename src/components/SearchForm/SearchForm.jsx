import PropTypes from 'prop-types';
import { Form, Input, SearchBtn } from './SearchForm.styled.js';

export const SearchForm = ({ updateQuery }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.currentTarget.elements.inputValue.value;

    if (inputValue === '') {
      return;
    }

    updateQuery(inputValue);
    evt.currentTarget.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="inputValue" placeholder="Enter movie name" />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
    </>
  );
};

SearchForm.propTypes = {
  updateQuery: PropTypes.func.isRequired,
};
