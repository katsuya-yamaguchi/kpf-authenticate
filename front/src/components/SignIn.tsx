import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { thunkLogin } from '../actions/auth'
import { RootState } from '../store'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import AuthForm from './AuthForm'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center'
    }
  })
)

const SignIn: React.FC = props => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const history = useHistory()
  const classes = useStyles()

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/useronly')
    }
  })

  return (
    <div>
      <div className={classes.root}>
        <h1>SignIn</h1>
      </div>
      <AuthForm processName="signin" runFunc={thunkLogin} />
    </div>
  )
}

export default SignIn
