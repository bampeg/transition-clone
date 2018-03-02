import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Bikes.css'
import BikeTile from '../../components/BikeTile/BikeTile'
import bikesOverview from '../../images/BikesOverview_1.jpg'
import tr11image from '../../images/BikeButton_TR11.gif'

class Bikes extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }



    render() {
        return (
            <div className="Bikes_mainContainer">
                <img className="Home_mainImg" src={bikesOverview} alt="" />
                <BikeTile bikeTileTitle="TR11" bikeTileImage={tr11image} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front"/>
                <BikeTile bikeTileTitle="TR11" bikeTileImage={tr11image} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front"/>
                <BikeTile bikeTileTitle="TR11" bikeTileImage={tr11image} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front"/>
                <BikeTile bikeTileTitle="TR11" bikeTileImage={tr11image} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front"/>
                <BikeTile bikeTileTitle="TR11" bikeTileImage={tr11image} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front"/>
                <BikeTile bikeTileTitle="TR11" bikeTileImage={tr11image} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front"/>
                <BikeTile bikeTileTitle="TR11" bikeTileImage={tr11image} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front"/>
                <BikeTile bikeTileTitle="TR11" bikeTileImage={tr11image} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front"/>
                <BikeTile bikeTileTitle="TR11" bikeTileImage={tr11image} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front"/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Bikes)