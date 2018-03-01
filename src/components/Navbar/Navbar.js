import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.css'
import topLeftLogo from '../../images/Nav_TransitionLogoTopLeftCorner.png'
import hamburger from '../../images/MenuIcon.png'
import accountImg from '../../images/Icon_Account_Off.png'

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
                                <Link to='/Who'><div onClick={ () => this.setState({ expanded: false }) }>WHO WE ARE</div></Link>
                                <Link to='/Bikes'><div onClick={ () => this.setState({ expanded: false }) }>BIKES</div></Link>
                                <Link to='/Store'><div onClick={ () => this.setState({ expanded: false }) }>STORE</div></Link>
                                <Link to='/Account_Login'><img onClick={ () => this.setState({ expanded: false }) } src={ accountImg }/></Link>
                              </div>
        }
        return(
            <div className='navContainer'>
                <div className='nav'>
                    <Link to='/Home'>{ logo }</Link>
                    <img className='nav_hamburger' onClick={ () => this.openHamburger() } src={ hamburger } alt=''/>
                </div>
                { expandedContent }
            </div>
        )
    }
}

function mapStateToProps(state) {

}

export default connect()(Navbar)