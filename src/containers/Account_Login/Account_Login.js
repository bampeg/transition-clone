import React, { Component } from 'react'

export default class Account_Login extends Component {
    render() {
        return(
            <a href={ process.env.REACT_APP_LOGIN }><button>SIGN IN</button></a>
        )
    }
}

