import React  from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { RootState } from '../store';

const Auth: React.FC = (props) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  console.log(isLoggedIn)

  if(isLoggedIn){ 
    return (<div>{props.children}</div>)
  }
  return (<Redirect to={'/'}/>)
}

export default Auth
