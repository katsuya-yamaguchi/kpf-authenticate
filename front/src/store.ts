import { createStore, applyMiddleware, combineReducers } from 'redux';
import { authReducer, fetchLoginStatusReducer } from './reducers/auth';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
  auth: authReducer,
  fetchLoginStatus: fetchLoginStatusReducer
})

const logger = createLogger({
  diff: true,
  collapsed: true
})

export const store = createStore(
  rootReducer,
  applyMiddleware(
    logger
  )
);

export type RootState = ReturnType<typeof rootReducer>
