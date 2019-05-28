import { connect } from 'react-redux';
import Thumbnails from '../components/books/Thumbnails';
import { getAllBooks } from '../selectors/bookSelectors';

const mapStateToProps = state => ({
  isbns: getAllBooks(state)
});

export default connect(
  mapStateToProps
)(Thumbnails);
