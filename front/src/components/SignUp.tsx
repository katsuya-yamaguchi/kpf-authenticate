import React from 'react';
import { useDispatch  } from 'react-redux';
import { login } from '../actions/auth';
import { userStateType } from '../constants/auth'

const SignUp: React.FC = props => {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: userStateType = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    }
    dispatch(login(user))
  }

  return (
    <div>
      <h1>SignUp</h1>
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
        <button type='submit'>SingUp</button>
      </form>
    </div>
  )
}

export default SignUp;
