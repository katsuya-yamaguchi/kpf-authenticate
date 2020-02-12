export interface loginActionType {
  type: String
  data: {
    email: String
    password: String
  }
}

export interface userStateType {
  email: String
  password: String
}

export interface loginType {
  type: String
  user: userStateType
}

export interface fetchLoginStatusActionType {
  type: String
  isLoggedIn: Boolean
}
