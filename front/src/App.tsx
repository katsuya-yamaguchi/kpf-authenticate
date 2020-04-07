import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserOnlyContainer from './container/UserOnlyContainer'
import Home from './components/Home'
import SignInContainer from './container/SignInContainer'
import SignUp from './components/SignUp'
import Header from './components/Header'
import Auth from './components/Auth'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignInContainer} />
        <Route exact path="/signup" component={SignUp} />
        <Auth>
          <Switch>
            <Route exact path="/useronly" component={UserOnlyContainer} />
          </Switch>
        </Auth>
      </Switch>
    </BrowserRouter>
  )
}

export default App
