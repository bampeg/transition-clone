import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './containers/Home/Home'
import Account_Login from './containers/Account_Login/Account_Login'
import Account_Logout from './containers/Account_Logout/Account_Logout'
import Account_Home from './containers/Account_Home/Account_Home'
import Navbar from './components/Navbar/Navbar'
import FooterLogo from './components/FooterLogo/FooterLogo'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Navbar/>
            <Switch>
              <Route path='/Home' component={ Home }/>
              <Route path='/Account_Login' component={ Account_Login }/>
              <Route path='/Account_Home' component={ Account_Home }/>
              <Route path='/Account_Logout' component={ Account_Logout }/>
            </Switch>
          </div>
        </HashRouter>
        <FooterLogo/>
      </div>
    )
  }
}