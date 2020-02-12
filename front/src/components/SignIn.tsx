import React from 'react';
import { useDispatch  } from 'react-redux';
import { login, fetchLoginStatus } from '../actions/auth';
import { userStateType } from '../constants/auth'

const SignIn: React.FC = props => {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: userStateType = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    }
    dispatch(login(user))
    dispatch(fetchLoginStatus(true))
  }

  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='email'
          placeholder='Email'
        />
        <input 
          type='password'
          name='password'
          placeholder='Password'
        />
        <button type='submit'>SingIn</button>
      </form>
    </div>
  )
}

export default SignIn;
