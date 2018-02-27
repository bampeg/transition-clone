import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default class Home extends Component {

    render() {

        console.log(process.env.REACT_APP_LOGIN)
        return(
            <div>
                <Link to='/Account_Login'><button>Account</button></Link>
            </div>
        )
    }
}