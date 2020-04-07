import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { thunkLogin } from '../actions/auth'
import { RootState } from '../store'

import { useHistory } from 'react-router-dom'

import AuthForm from './AuthForm'
import TitleBar from './TitleBar'


const SignIn: React.FC = props => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const history = useHistory()

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/useronly')
    }
  })

  return (
    <div>
      <AuthForm processName="signin" runFunc={thunkLogin} />
      <TitleBar title={props.title} />
    </div>
  )
}

export default SignIn
