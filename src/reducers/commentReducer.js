import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      console.log(action);
      return {
        ...state,
        [action.payload.isbn]: [
          ...(state[action.payload.isbn] || []),
          action.payload.comment
        ]
      };
    case DELETE_COMMENT:
      console.log(action);
      return {
        ...state,
        [action.payload.isbn]: [
          ...state[action.payload.isbn].slice(0, action.payload.id),
          ...state[action.payload.isbn].slice(action.payload.id + 1),
        ]
      };
    default:
      return state;
  }
}
