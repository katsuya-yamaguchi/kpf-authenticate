import { createStore, applyMiddleware, combineReducers } from 'redux';

const store = createStore(
  combineReducers({
    // reducer
  }),
  applyMiddleware(
    // middleware
  )
);

export default store;
