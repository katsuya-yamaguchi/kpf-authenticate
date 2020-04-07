import React from 'react'
import SignUp, { propType } from '../components/SignUp'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const SignUpContainer: React.FC<propType> = (props) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const title: String = 'SignUp'
  const processName: String = 'signup'

  const _props = { isLoggedIn, title, processName }

  return <SignUp {..._props} />
}

export default SignUpContainer