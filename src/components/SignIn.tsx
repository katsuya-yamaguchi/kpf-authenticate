import React from 'react';
import { useDispatch  } from 'react-redux';
import { login } from '../actions/auth';

const SignIn: React.FC = props => {
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    dispatch(login(user))
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
