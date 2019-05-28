import { createBook } from '../actions/bookActions';
import reducer from './bookReducer';

describe('book reducer', () => {
  it('creates a book', () => {
    const initialState = [];

    const newState = reducer(initialState, createBook(999));
    expect(newState).toEqual([999]);
    expect(initialState).toEqual([]);
  });
});
