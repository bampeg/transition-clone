import React from 'react'
import footerLogo from '../../images/Footer_TRlogo.png'
import './FooterLogo.css'

export default function FooterLogo() {
    return(
        <div className='footerLogo_container'>
            <img className='footerLogo_img' src={ footerLogo } alt=''/>
            <div className='footerLogo_Sentence'>
                YOU HAVE REACHED THE BOTTOM OF TRANSITIONBIKES.COM. IF YOU GET BORED DOWN HERE, <a className='footerLogo_bottomLink'>CLICK HERE</a> AND WE CAN TAKE YOU BACK TO THE TOP.
            </div>
        </div>
    )
}