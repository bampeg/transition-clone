import React, { Component } from 'react'
import './Account_Logout.css'

export default class Account_Logout extends Component {
    render() {
        return(
            <div className="Account_Logout_container">
                <h1>You have successfully logged out.</h1>
                <a href={ process.env.REACT_APP_LOGIN }>SIGN IN</a>
            </div>
        )
    }
}