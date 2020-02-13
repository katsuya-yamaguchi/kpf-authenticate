import {
  AuthStateType,
  AuthActionType,
  LOGIN,
  FETCH_LOGIN_STATUS
} from '../constants/auth'

const initialState: AuthStateType = {
  email: '',
  password: '',
  isLoggedIn: false
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
    default:
      return state
  }
}
