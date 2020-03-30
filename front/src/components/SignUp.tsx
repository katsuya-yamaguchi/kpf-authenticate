import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { thunkLogin } from '../actions/auth'
import { userType } from '../constants/auth'
import { RootState } from '../store'

import { TextField, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

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

const SignUp: React.FC = props => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const history = useHistory()

  const classes = useStyles()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user: userType = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    }
    dispatch(thunkLogin(user))
  }

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/useronly')
    }
  })

  return (
    <div>
      <div className={classes.root}>
        <h1>SignUp</h1>
      </div>
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
              SignUp
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
