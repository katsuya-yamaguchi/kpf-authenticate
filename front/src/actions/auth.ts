import {
  userType,
  AuthActionType,
  LOGIN,
  FETCH_LOGIN_STATUS,
  FETCH_LOAD_USER_DATA,
  AuthStateType
} from '../constants/auth'
import { ThunkAction } from 'redux-thunk'

export const login = (user: userType): AuthActionType => {
  return {
    type: LOGIN,
    data: {
      email: user.email,
      password: user.password
    }
  }
}

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
  unknown,
  AuthActionType
> => async dispatch => {
  dispatch(fetchLoadUserData(true))

  const url = 'http://localhost:3003/users'
  const data = {
    email: user.email,
    password: user.password
  }

  fetch(
    url,
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) 
    }
  ).then( res => {
    // json-serverで上手くHeaderが扱えなかったため、手動でCookieを設定。
    document.cookie = `Authorization=${res.headers.get('Authorization')}`

    const currentCookie: String | null = res.headers.get('Authorization')
    if(currentCookie === null){
      dispatch(fetchLoginStatus(false))
    }
    dispatch(fetchLoginStatus(true))
  }).catch(e => {
    console.log(e)
  })

  dispatch(fetchLoadUserData(false))
}
