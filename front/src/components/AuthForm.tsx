import React from 'react'
import { userType, AuthStateType, AuthActionType } from '../constants/auth'
import { ThunkAction } from 'redux-thunk'

import { TextField, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      margin: '10px auto',
      display: 'block'
    }
  })
)

export interface propType {
  processName: String
  doAuthenticate: (
    user: userType
  ) => ThunkAction<void, AuthStateType, undefined, AuthActionType>
}

const AuthForm: React.FC<propType> = props => {
  const classes = useStyles()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user: userType = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    }
    props.doAuthenticate(user)
  }

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField id="standard-basic" name="email" label="Email" />
        </div>
        <div>
          <TextField type="password" name="password" label="Password" />
        </div>
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            {props.processName}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AuthForm
