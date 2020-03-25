import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Auth: React.FC = props => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)

  return isLoggedIn ? <Route {...props} /> : <Redirect to={'/signin'} />
}

export default Auth
