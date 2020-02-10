import { loginActionType, userStateType } from '../constants/auth';

export const login = (user: userStateType): loginActionType => {
  return {
    type: 'LOGIN',
    data: {
      email: user.email,
      password: user.password
    }
  }
}
