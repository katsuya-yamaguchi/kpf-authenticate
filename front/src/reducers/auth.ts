import { loginActionType, userStateType } from '../constants/auth';

const initialState: userStateType = {
  email: "",
  password: ""
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
