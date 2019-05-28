import { CREATE_BOOK, createBook } from './bookActions';

describe('book actions', () => {
  it('can create a create book action', () => {
    expect(createBook(1234)).toEqual({
      type: CREATE_BOOK,
      payload: 1234
    });
  });
});
