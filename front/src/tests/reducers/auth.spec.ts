import { authReducer } from '../../reducers/auth'
import { AuthActionType, FETCH_LOAD_USER_DATA, FETCH_LOGIN_STATUS } from '../../constants/auth'

describe('authReducer', () => {
  it('it is to suceed in load user data.', () => {
    const action: AuthActionType = {
      type: FETCH_LOAD_USER_DATA,
      isLoading: true
    }

    const expectState = {
      email: '',
      password: '',
      isLoggedIn: false,
      isLoading: true
    }
    expect(authReducer(undefined, action)).toEqual(expectState)
  })

  it('it is to failed in load user data.', () => {
    const action: AuthActionType = {
      type: FETCH_LOAD_USER_DATA,
      isLoading: false
    }

    const expectState = {
      email: '',
      password: '',
      isLoggedIn: false,
      isLoading: false
    }
    expect(authReducer(undefined, action)).toEqual(expectState)
  })

  it('it is to suceed in fetch login status.', () => {
    const action: AuthActionType = {
      type: FETCH_LOGIN_STATUS,
      isLoggedIn: true
    }

    const expectState = {
      email: '',
      password: '',
      isLoggedIn: true,
      isLoading: false
    }
    expect(authReducer(undefined, action)).toEqual(expectState)
  })

  it('it is to failed in fetch login status.', () => {
    const action: AuthActionType = {
      type: FETCH_LOGIN_STATUS,
      isLoggedIn: false
    }

    const expectState = {
      email: '',
      password: '',
      isLoggedIn: false,
      isLoading: false
    }
    expect(authReducer(undefined, action)).toEqual(expectState)
  })
})