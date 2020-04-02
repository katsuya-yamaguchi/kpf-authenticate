import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { fetchLoadUserData, fetchLoginStatus, thunkLogin } from '../../actions/auth'
import { AuthActionType, FETCH_LOAD_USER_DATA, FETCH_LOGIN_STATUS, userType, AuthStateType } from '../../constants/auth'
import { ThunkDispatch } from 'redux-thunk'

describe('fetchLoadUserData', () => {
  it('is to suceed in fetching user data.', () => {
    const state: Boolean = true
    const expectedAction: AuthActionType = {
      type: FETCH_LOAD_USER_DATA,
      isLoading: true
    }
    expect(fetchLoadUserData(state)).toEqual(expectedAction)
  })
  it('is to failed in fetching user data.', () => {
    const state: Boolean = false
    const expectedAction: AuthActionType = {
      type: FETCH_LOAD_USER_DATA,
      isLoading: false
    }
    expect(fetchLoadUserData(state)).toEqual(expectedAction)
  })
})

describe('fetchLoginStatus', () => {
  it('it is to suceed in fetching login status.', () => {
    const state: Boolean = true
    const expectedAction: AuthActionType = {
      type: FETCH_LOGIN_STATUS,
      isLoggedIn: true
    }
    expect(fetchLoginStatus(state)).toEqual(expectedAction)
  })

  it('it is to failed in fetching login status.', () => {
    const state: Boolean = false
    const expectedAction: AuthActionType = {
      type: FETCH_LOGIN_STATUS,
      isLoggedIn: false
    }
    expect(fetchLoginStatus(state)).toEqual(expectedAction)
  })
})

describe('thunkLogin', () => {
  it('it is to suceed in login.', async () => {
    const user: userType = {
      email: 'sample@sample.com',
      password: '123$fgA'
    }

    const expectedSecondAction: AuthActionType = {
      type: FETCH_LOGIN_STATUS,
      isLoggedIn: true
    }

    type dispatchExts = ThunkDispatch<AuthStateType, undefined, AuthActionType>
    const mockStore = configureStore<AuthStateType, dispatchExts>([thunk])
    const store = mockStore()
    document.domain = "localhost:3000"
    await store.dispatch(thunkLogin(user))

    console.log(location)
    console.log(store.getActions())
    //expect(store.getActions()[1]).toEqual(expectedSecondAction)
  })
})
