import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './containers/Home/Home'
import Account_Login from './containers/Account_Login/Account_Login'
import Account_Logout from './containers/Account_Logout/Account_Logout'
import Account_Home from './containers/Account_Home/Account_Home'
import Navbar from './components/Navbar/Navbar'
import FooterLogo from './components/FooterLogo/FooterLogo'
import Bikes from './containers/Bikes/Bikes'
import Who from './containers/Who/Who'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="App_container">
            <Navbar/>
            <Switch>
              <Route path='/Bikes/:bikeId' component={ Bikes }/>
              <Route path='/Bikes' component={ Bikes }/>
              <Route path='/Who' component={ Who }/>
              <Route path='/Account_Login' component={ Account_Login }/>
              <Route path='/Account_Home' component={ Account_Home }/>
              <Route path='/Account_Logout' component={ Account_Logout }/>
              <Route path='/' component={ Home }/>
            </Switch>
          </div>
        </HashRouter>
        <FooterLogo/>
      </div>
    )
  }
}