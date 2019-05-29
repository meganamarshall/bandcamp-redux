import { createStore } from 'redux';
import reducer from './reducers';
import { loadState, saveState } from './services/localStorage';

const persistedState = loadState();
 
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({
    books: store.getState().books,
    comments: store.getState().comments
  });
});

export default store;
