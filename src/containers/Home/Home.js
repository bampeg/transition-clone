import React from 'react'
import './Home.css'
import homepageRiderOwnedImg from '../../images/HomepageRiderOwnedForLife3.jpg'
import FunFaces from '../../components/FunFaces/FunFaces'


export default function Home() {
        return (
            <div className="Home_container">
                <img className="Home_mainImg" src={homepageRiderOwnedImg} alt="" />
                <FunFaces/>
                <div className="Home_featurePres">FEATURE PRESENTATION</div>
                <iframe className="Home_vimeo" title="FarmerPatrol" src="https://player.vimeo.com/video/258344386" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen/>
            </div>
        )
}