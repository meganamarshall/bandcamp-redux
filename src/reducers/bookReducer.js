import { CREATE_BOOK } from '../actions/bookActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type){
    case CREATE_BOOK: 
      return [...state, action.payload];
    default: 
      return state;
  }
}
