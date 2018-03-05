import React, { Component } from 'react'
import './Account_Login.css'

export default class Account_Login extends Component {
    render() {
        return(
            <div className="Account_Login">
                <a href={ process.env.REACT_APP_LOGIN }>SIGN IN</a>
            </div>
        )
    }
}

