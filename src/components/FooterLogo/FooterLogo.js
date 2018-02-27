import React from 'react'
import footerLogo from '../../images/Footer_TRlogo.png'
import './FooterLogo.css'

export default function FooterLogo() {
    return(
        <div className='footerLogo'>
            <img className='footerLogoImg' src={ footerLogo } alt=''/>
            <div className='footerSentence'>
                YOU HAVE REACHED THE BOTTOM OF TRANSITIONBIKES.COM. IF YOU GET BORED DOWN HERE, <a className='footerSentenceLink'>CLICK HERE</a> AND WE CAN TAKE YOU BACK TO THE TOP.
            </div>
        </div>
    )
}