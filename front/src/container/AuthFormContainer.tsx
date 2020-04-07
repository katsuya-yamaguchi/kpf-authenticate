import React from 'react'
import AuthForm, { propType } from '../components/AuthForm'
import { userType } from '../constants/auth'
import { useDispatch } from 'react-redux'

const AuthFormContainer: React.FC<propType> = (props) => {
  const dispatch = useDispatch()

  const doAuthenticate = (user: userType) => dispatch(props.doAuthenticate(user))
  const processName = props.processName

  const _props = { doAuthenticate, processName }

  return <AuthForm {..._props} />
}

export default AuthFormContainer
