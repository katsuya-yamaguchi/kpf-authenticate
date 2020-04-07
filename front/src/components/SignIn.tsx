import React, { useEffect } from 'react'
import { thunkLogin } from '../actions/auth'
import { useHistory } from 'react-router-dom'

import AuthFormContainer from '../container/AuthFormContainer'
import TitleBar from './TitleBar'

export interface propType {
  isLoggedIn: boolean
  title: String
  processName: String
}

const SignIn: React.FC<propType> = props => {
  const history = useHistory()

  useEffect(() => {
    if (props.isLoggedIn) {
      history.push('/useronly')
    }
  })

  return (
    <div>
      <TitleBar title={props.title} />
      <AuthFormContainer processName={props.processName} doAuthenticate={thunkLogin} />
    </div>
  )
}

export default SignIn
