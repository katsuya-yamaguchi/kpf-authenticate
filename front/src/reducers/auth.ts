import { loginActionType, userStateType, fetchLoginStatusActionType } from '../constants/auth';

const initialState: userStateType = {
  email: "",
  password: "",
}

const init = {
  isLoggedIn: false
}

export const authReducer = (
    state=initialState,
    action: loginActionType
  ): userStateType => {
  switch(action.type){
    case 'LOGIN':
      return Object.assign({}, state, {email: action.data.email})
    default:
      return state;
  }
}

export const fetchLoginStatusReducer = (
  state=init,
  action: fetchLoginStatusActionType
) => {
  switch(action.type){
    case 'FETCH_LOGIN_STATUS':
      return Object.assign({}, state, {isLoggedIn: action.isLoggedIn})
    default:
      return state
  }
}