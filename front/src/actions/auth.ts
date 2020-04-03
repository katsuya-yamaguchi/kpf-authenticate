import {
  userType,
  AuthActionType,
  FETCH_LOGIN_STATUS,
  FETCH_LOAD_USER_DATA,
  AuthStateType
} from '../constants/auth'
import { ThunkAction } from 'redux-thunk'

export const fetchLoadUserData = (state: Boolean): AuthActionType => {
  return {
    type: FETCH_LOAD_USER_DATA,
    isLoading: state
  }
}

export const fetchLoginStatus = (state: Boolean): AuthActionType => {
  return {
    type: FETCH_LOGIN_STATUS,
    isLoggedIn: state
  }
}

export const thunkLogin = (
  user: userType
): ThunkAction<
  void,
  AuthStateType,
  undefined,
  AuthActionType
> => dispatch => {
  const url = 'http://localhost:3003/users'
  const data = {
    email: user.email,
    password: user.password
  }

  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      // json-serverで上手くHeaderが扱えなかったため、手動で設定。
      //const currentHeader: String | null = res.headers.get('Authorization')
      const currentHeader: String | null = 'aaaaa'
      if (currentHeader === null) {
        dispatch(fetchLoginStatus(false))
      }else{
        dispatch(fetchLoginStatus(true))
      }
    })
    .catch(e => {
      console.log(e)
    })
}

export const thunkSignUp = (
  user: userType
): ThunkAction<
  void,
  AuthStateType,
  undefined,
  AuthActionType
> => async dispatch => {
  const url = 'http://localhost:3003/users'
  const data = {
    email: user.email,
    password: user.password
  }

  fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => {
      // json-serverで上手くHeaderが扱えなかったため、手動で設定。
      //const currentHeader: String | null = res.headers.get('Authorization')
      const currentHeader: String | null = 'aaaaa'
      if (currentHeader === null) {
        dispatch(fetchLoginStatus(false))
      }else{
        dispatch(fetchLoginStatus(true))
      }
    })
    .catch(e => {
      console.log(e)
    })
}
