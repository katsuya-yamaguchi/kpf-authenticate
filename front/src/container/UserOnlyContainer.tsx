import React from 'react'
import UserOnly from '../components/UserOnly'
import { useDispatch } from 'react-redux'
import { fetchLoginStatus as fetchLoginStatusAction } from '../actions/auth'

const UserOnlyContainer: React.FC = (props) => {
  const dispatch = useDispatch()
  const fetchLoginStatus = (state: Boolean) => dispatch(fetchLoginStatusAction(state))

  const _props = { fetchLoginStatus }

  return <UserOnly {..._props} />
}

export default UserOnlyContainer