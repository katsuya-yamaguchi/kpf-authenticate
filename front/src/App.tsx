import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserOnly from './components/UserOnly'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Header from './components/Header'
import Auth from './components/Auth'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Auth>
        <Switch>
          <Route exact path="/useronly" component={UserOnly} />
        </Switch>
      </Auth>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route />
    </BrowserRouter>
  )
}

export default App
