export const getComments = (state, isbn) => {
  return state.comments[isbn] || [];
};
