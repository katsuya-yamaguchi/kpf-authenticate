import { fetchLoadUserData } from '../../actions/auth'
import { AuthActionType, FETCH_LOAD_USER_DATA } from '../../constants/auth'

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
