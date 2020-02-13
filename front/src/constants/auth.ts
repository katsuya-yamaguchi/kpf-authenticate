export interface AuthStateType {
  email: String
  password: String
  isLoggedIn: boolean
}

export interface loginStateType {
  isLoggedIn: boolean
}

export const LOGIN = 'LOGIN'
export interface loginActionType {
  type: typeof LOGIN
  data: {
    email: String
    password: String
  }
}

export const FETCH_LOGIN_STATUS = 'FETCH_LOGIN_STATUS'
export interface fetchLoginStatusActionType {
  type: typeof FETCH_LOGIN_STATUS
  isLoggedIn: Boolean
}

export type AuthActionType = loginActionType | fetchLoginStatusActionType

export interface userType {
  email: String
  password: String
}
