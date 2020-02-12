import { 
  loginActionType, 
  userStateType, 
  fetchLoginStatusActionType 
} from '../constants/auth';

export const login = (user: userStateType): loginActionType => {
  return {
    type: 'LOGIN',
    data: {
      email: user.email,
      password: user.password
    }
  }
}

export const fetchLoginStatus = (state: Boolean): fetchLoginStatusActionType => {
  return {
    type: 'FETCH_LOGIN_STATUS',
    isLoggedIn: state
  }
}
