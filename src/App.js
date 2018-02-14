import React, { Component } from 'react'
import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './containers/Home/Home'
import Account_Login from './containers/Accout_Login/Account_Login'
import Account_Logout from './containers/Account_Logout/Account_Logout'
import Account_Home from './containers/Account_Home/Account_Home'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/Account_Login' component={ Account_Login }/>
            <Route path='/Account_Home' component={ Account_Home }/>
            <Route path='/Account_Logout' component={ Account_Logout }/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}