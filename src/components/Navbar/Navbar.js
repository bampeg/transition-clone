import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.css'
import topLeftLogo from '../../images/Nav_TransitionLogoTopLeftCorner.png'
import hamburger from '../../images/MenuIcon.png'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }

    openHamburger() {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        let logo = <img className='topLeftLogo' src={ topLeftLogo } alt=''/>
        let expandedContent = null
        
        if(this.state.expanded) {
            expandedContent = <div className='openHamburger'>
                                <Link to='/Who'><div>WHO WE ARE</div></Link>
                                <Link to='/Bikes'><div>BIKES</div></Link>
                                <Link to='/Store'><div>STORE</div></Link>
                              </div>
        }
        return(
            <div className='navContainer'>
                <div className='nav'>
                    { logo }
                    <img className='nav_hamburger' onClick={ () => this.openHamburger() } src={ hamburger } alt=''/>
                </div>
                { expandedContent }
            </div>
        )
    }
}

export default connect()(Navbar)