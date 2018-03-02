import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import homepageRiderOwnedImg from '../../images/HomepageRiderOwnedForLife3.jpg'
import FunFaces from '../../components/FunFaces/FunFaces'


export default class Home extends Component {

    render() {
        return (
            <div className="Home_container">
                <img className="Home_mainImg" src={homepageRiderOwnedImg} alt="" />
                <FunFaces/>
                <div className="Home_featurePres">FEATURE PRESENTATION</div>
            </div>
        )
    }
}