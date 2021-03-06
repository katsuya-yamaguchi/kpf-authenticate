import { createStore, applyMiddleware, combineReducers } from 'redux'
import { authReducer } from './reducers/auth'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  auth: authReducer
})

const logger = createLogger({
  diff: true,
  collapsed: true
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export type RootState = ReturnType<typeof rootReducer>
