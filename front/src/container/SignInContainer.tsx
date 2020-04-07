import React from 'react'
import SignIn, { propType } from '../components/SignIn'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const SignInContainer: React.FC<propType> = (props) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const title: String = 'SignIn'
  const processName: String = 'signin'

  const _props = { isLoggedIn, title, processName }

  return <SignIn {..._props} />
}

export default SignInContainer