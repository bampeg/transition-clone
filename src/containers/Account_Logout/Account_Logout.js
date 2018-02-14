import React, { Component } from 'react'

export default class Account_Logout extends Component {
    render() {
        return(
            <div>
                <h1>You have successfully logged out.</h1>
                <a href={ process.env.REACT_APP_LOGIN }><button>SIGN IN</button></a>
            </div>
        )
    }
}