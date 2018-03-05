import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Navbar.css'
import topLeftLogo from '../../images/Nav_TransitionLogoTopLeftCorner.png'
import hamburger from '../../images/MenuIcon.png'

import accountNotLogged from '../../images/Icon_Account_Off.png'
import accountLogged from '../../images/Icon_Account_On.png'

import cartEmpty from '../../images/Icon_ShoppingCart_Off.png'
// import cartOn from '../../images/Icon_ShoppingCart_On.png'

import facebookImg from '../../images/Icon_Facebook.png'
import instaImg from '../../images/Icon_Instagram.png'
import vimeoImg from '../../images/Icon_Vimeo.png'
import emailImg from '../../images/Icon_Email.png'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            expanded: false,
            loggedIn: false
        }
    }

    openHamburger() {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        // console.log(this.props)

        let accountImg = accountNotLogged
        if(this.props.peddler.peddler_id) {
            accountImg = accountLogged
        }

        let cartImg = cartEmpty
        // if(this.props.peddler.peddler_cart) {
        //     cartImg = cartOn
        // }

        let logo = <img className='Navbar_topLeftLogo' src={ topLeftLogo } alt=''/>
        let expandedContent = null
        if(this.state.expanded) {
            expandedContent = <div className='Navbar_openHamburger'>
                                <Link to='/Who'><div onClick={ () => this.setState({ expanded: false }) }>WHO WE ARE</div></Link>
                                <Link to='/Bikes'><div onClick={ () => this.setState({ expanded: false }) }>BIKES</div></Link>
                                <Link to='/Store'><div onClick={ () => this.setState({ expanded: false }) }>STORE</div></Link>
                                <Link to='/Demo'><div onClick={ () => this.setState({ expanded: false }) }>DEMO</div></Link>
                                <Link to='/Dealers'><div onClick={ () => this.setState({ expanded: false }) }>DEALERS</div></Link>
                                <Link to='/Support'><div onClick={ () => this.setState({ expanded: false }) }>SUPPORT</div></Link>
                                <div className="Navbar_imageLinks">
                                    <Link to='/Account_Login'><img onClick={ () => this.setState({ expanded: false }) } src={ accountImg } alt=""/></Link>
                                    <Link to='/Cart'><img onClick={ () => this.setState({ expanded: false }) } src={ cartImg } alt=""/></Link>
                                </div>
                                <div className="Navbar_imageLinks">
                                    <a href='https://www.facebook.com/TransitionBikeCo/'><img onClick={ () => this.setState({ expanded: false }) } src={ facebookImg } alt=""/></a>
                                    <a href='https://www.instagram.com/transitionbikes/'><img onClick={ () => this.setState({ expanded: false }) } src={ instaImg } alt=""/></a>
                                    <a href='https://vimeo.com/channels/301304'><img onClick={ () => this.setState({ expanded: false }) } src={ vimeoImg } alt=""/></a>
                                    <a href='https://visitor.r20.constantcontact.com/manage/optin?v=001yKVyJhIEkj62DU2Kcv3m_elnV5mIlfkWDhuDdrNQDAqo17ZDVWX5WNeXl0jW-Z31Lx4hezDnGkyzxoN0wYQhQbBR_0YKOgiXe0TK8fpC6_Y%3D'><img onClick={ () => this.setState({ expanded: false }) } src={ emailImg } alt=""/></a>
                                </div>
                              </div>
        }

        return(
            <div className='Navbar_container'>
                <Link to='/Home'>{ logo }</Link>
                <div className='Navbar'>
                    <img className='Navbar_hamburger' onClick={ () => this.openHamburger() } src={ hamburger } alt=''/>

                    <a href='https://visitor.r20.constantcontact.com/manage/optin?v=001yKVyJhIEkj62DU2Kcv3m_elnV5mIlfkWDhuDdrNQDAqo17ZDVWX5WNeXl0jW-Z31Lx4hezDnGkyzxoN0wYQhQbBR_0YKOgiXe0TK8fpC6_Y%3D'><img src={ emailImg } alt=""/></a>
                    <a href='https://vimeo.com/channels/301304'><img src={ vimeoImg } alt=""/></a>
                    <a href='https://www.instagram.com/transitionbikes/'><img src={ instaImg } alt=""/></a>
                    <a href='https://www.facebook.com/TransitionBikeCo/'><img src={ facebookImg } alt=""/></a>

                    <Link to='/Cart'><img onClick={ () => this.setState({ expanded: false }) } src={ cartImg } alt=""/></Link>
                    <Link to='/Account_Login'><img onClick={ () => this.setState({ expanded: false }) } src={ accountImg } alt=""/></Link>

                    <Link to='/Support'><div onClick={ () => this.setState({ expanded: false }) }>SUPPORT</div></Link>
                    <Link to='/Dealers'><div onClick={ () => this.setState({ expanded: false }) }>DEALERS /</div></Link>
                    <Link to='/Demo'><div onClick={ () => this.setState({ expanded: false }) }>DEMO /</div></Link>
                    <Link to='/Store'><div onClick={ () => this.setState({ expanded: false }) }>STORE /</div></Link>
                    <Link to='/Bikes'><div onClick={ () => this.setState({ expanded: false }) }>BIKES /</div></Link>
                    <Link to='/Who'><div onClick={ () => this.setState({ expanded: false }) }>WHO WE ARE /</div></Link>
                </div>
                { expandedContent }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Navbar)