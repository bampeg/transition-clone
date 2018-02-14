import React, { Component } from 'react'

export default class Account extends Component {

    render() {
        return(
            <div>
                <h1>Your Account</h1>
                <a href='http://localhost:3002/logout'><button>SIGN OUT</button></a>
            </div>
        )
    }
}
