export const CREATE_BOOK = 'CREATE_BOOK';
export const createBook = isbn => ({
  type: CREATE_BOOK,
  payload: isbn
});
