import { connect } from 'react-redux';
import { createBook } from '../actions/bookActions';
import BookForm from '../components/books/BookForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(isbn) {
    dispatch(createBook(isbn));
  }
});

export default connect(
  null, 
  mapDispatchToProps
)(BookForm);
