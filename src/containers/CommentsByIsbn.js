import { connect } from 'react-redux';
import { getComments } from '../selectors/commentSelectors';
import Comments from '../components/comments/Comments';
import { deleteComment } from '../actions/commentActions';

const mapStateToProps = (state, { isbn }) => ({
  comments: getComments(state, isbn),
  isbn: isbn
});

const mapDispatchToProps = (dispatch, { isbn }) => ({
  deleteComment(id) {
    dispatch(deleteComment(isbn, id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
