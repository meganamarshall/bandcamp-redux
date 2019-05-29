import { combineReducers } from 'redux';
import books from './bookReducer';
import comments from './commentReducer';

export default combineReducers({
  books,
  comments
});
