import { connect } from 'react-redux';
import BookDetail from '../components/detail/BookDetail';
// import { getComments } from '../selectors/commentSelectors';

const mapStateToProps = (state, props) => ({
  isbn: props.match.params.isbn,
  // comments: getComments(state, props.match.params.isbn)
});

export default connect(
  mapStateToProps
)(BookDetail);

