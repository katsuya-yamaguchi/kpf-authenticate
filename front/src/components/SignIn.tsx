import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLoginStatus, thunkLogin } from '../actions/auth'
import { userType } from '../constants/auth'
import {RootState} from '../store'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      margin: '5px 0 0 0'
    }
  })
)

const SignIn: React.FC = props => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state: RootState) => state.auth.isLoading)

  const classes = useStyles();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user: userType = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    }
    dispatch(thunkLogin(user))
  }

  return (
    <div>
      <div>
        <h1>SignIn</h1>
      </div>
      <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField id='standard-basic' name='email' label='Email' />
        </div>
        <div>
          <TextField type='password' name='password' label='Password' />
        </div>
        {
          isLoading ? isLoading : isLoading
        }
        <div>
          <Button 
            className={classes.button} 
            variant='contained' 
            color='primary' 
            type='submit'
          >
            SignIn
          </Button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default SignIn
