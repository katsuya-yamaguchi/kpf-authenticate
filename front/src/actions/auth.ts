import {
  userType,
  AuthActionType,
  LOGIN,
  FETCH_LOGIN_STATUS
} from '../constants/auth'

export const login = (user: userType): AuthActionType => {
  return {
    type: LOGIN,
    data: {
      email: user.email,
      password: user.password
    }
  }
}

export const fetchLoginStatus = (state: Boolean): AuthActionType => {
  return {
    type: FETCH_LOGIN_STATUS,
    isLoggedIn: state
  }
}
