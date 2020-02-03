import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import UserOnly from './components/UserOnly';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={UserOnly} />
      <Route path='/home' component={Home} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route />
    </BrowserRouter>
  );
}

export default App;
