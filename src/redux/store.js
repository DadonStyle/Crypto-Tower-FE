import { createStore, combineReducers } from 'redux';
import connectionReducer from './reducers/connectionReducer';

const reducers = combineReducers({ connectionReducer });

export const store = createStore(
  reducers,
  // eslint-disable-next-line no-undef
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
