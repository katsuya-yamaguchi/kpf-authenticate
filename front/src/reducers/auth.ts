import {
  AuthStateType,
  AuthActionType,
  LOGIN,
  FETCH_LOGIN_STATUS,
  FETCH_LOAD_USER_DATA
} from '../constants/auth'

const initialState: AuthStateType = {
  email: '',
  password: '',
  isLoggedIn: false,
  isLoading: false
}

export const authReducer = (
  state = initialState,
  action: AuthActionType
): AuthStateType => {
  switch (action.type) {
    case LOGIN:
      console.log(action.data.email)
      return Object.assign({}, state, {
        email: action.data.email,
        password: action.data.password
      })
    case FETCH_LOGIN_STATUS:
      return Object.assign({}, state, { isLoggedIn: action.isLoggedIn })
    case FETCH_LOAD_USER_DATA:
      return Object.assign({}, state, { isLoggedIn: action.isLoading })
    default:
      return state
  }
}
