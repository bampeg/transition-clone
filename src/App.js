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

import TR11 from './components/TR11/TR11'
import Patrol from './components/Patrol/Patrol'
import PBJ from './components/PBJ/PBJ'
import Ripcord from './components/Ripcord/Ripcord'
import Scout from './components/Scout/Scout'
import Sentinel from './components/Sentinel/Sentinel'
import Smuggler from './components/Smuggler/Smuggler'
import Throttle from './components/Throttle/Throttle'
import Vanquish from './components/Vanquish/Vanquish'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="App_container">
            <Navbar/>
            <Switch>
              <Route path='/Bikes/TR11' component={ TR11 }/>
              {/* <Route path='/Bikes/SENTINEL' component={ Sentinel }/>
              <Route path='/Bikes/PATROL' component={ Patrol }/>
              <Route path='/Bikes/SCOUT' component={ Scout }/>
              <Route path='/Bikes/SMUGGLER' component={ Smuggler }/>
              <Route path='/Bikes/THROTTLE' component={ Throttle }/>
              <Route path='/Bikes/VANQUISH' component={ Vanquish }/>
              <Route path='/Bikes/PBJ' component={ PBJ }/>
              <Route path='/Bikes/RIPCORD' component={ Ripcord }/> */}
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