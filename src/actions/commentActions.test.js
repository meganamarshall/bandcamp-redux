import { CREATE_COMMENT, createComment, DELETE_COMMENT, deleteComment } from './commentActions';

describe('comment actions', () => {
  it('creates a comment', () => {
    const comment = 'real good bookie';
    const  isbn = '1234567890';

    expect(createComment(isbn, comment)).toEqual({
      type: CREATE_COMMENT,
      payload: { 
        isbn: '1234567890', 
        comment: 'real good bookie' }
    });
  });

  it('deletes a comment', () => {
    const  isbn = '1234567890';
    const id = 45;

    expect(deleteComment(isbn, id)).toEqual({
      type: DELETE_COMMENT,
      payload: { 
        isbn: '1234567890', 
        id: 45 }
    });
  });
});
