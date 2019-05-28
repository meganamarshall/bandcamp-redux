export const getComments = (state, isbn) => {
  return state.comments[isbn] || ['this is not a real comment'];
};
