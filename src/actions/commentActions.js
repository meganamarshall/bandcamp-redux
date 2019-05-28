export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (isbn, comment) => ({
  type: CREATE_COMMENT,
  payload: { isbn, comment }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (isbn, id) => ({
  type: DELETE_COMMENT,
  payload: { isbn, id }
});
