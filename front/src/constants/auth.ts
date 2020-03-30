export interface AuthStateType {
  email: String
  password: String
  isLoggedIn: boolean
  isLoading: boolean
}

export interface loginStateType {
  isLoggedIn: boolean
}

export const FETCH_LOGIN_STATUS = 'FETCH_LOGIN_STATUS'
export interface fetchLoginStatusActionType {
  type: typeof FETCH_LOGIN_STATUS
  isLoggedIn: Boolean
}

export const FETCH_LOAD_USER_DATA = 'FETCH_LOAD_USER_DATA'
export interface fetchLoadUserDataActionType {
  type: typeof FETCH_LOAD_USER_DATA
  isLoading: Boolean
}

export type AuthActionType =
  | fetchLoginStatusActionType
  | fetchLoadUserDataActionType

export interface userType {
  email: String
  password: String
}
