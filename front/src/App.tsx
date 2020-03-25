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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Auth>
          <Switch>
            <Route exact path="/useronly" component={UserOnly} />
          </Switch>
        </Auth>
      </Switch>
    </BrowserRouter>
  )
}

export default App
