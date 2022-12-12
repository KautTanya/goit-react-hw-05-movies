import PropTypes from 'prop-types';
import { LoadMoreBtn } from './LoadMore.styled.js';

export const LoadMore = ({ loadMore }) => {
  return (
    <LoadMoreBtn type="button" onClick={loadMore}>
      Load more
    </LoadMoreBtn>
  );
};

LoadMore.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
