import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Bikes.css'
import BikeTile from '../../components/BikeTile/BikeTile'

import TR11 from '../../components/TR11/TR11'
import Patrol from '../../components/Patrol/Patrol'
import PBJ from '../../components/PBJ/PBJ'
import Ripcord from '../../components/Ripcord/Ripcord'
import Scout from '../../components/Scout/Scout'
import Sentinel from '../../components/Sentinel/Sentinel'
import Smuggler from '../../components/Smuggler/Smuggler'
import Throttle from '../../components/Throttle/Throttle'
import Vanquish from '../../components/Vanquish/Vanquish'

import bikesOverview from '../../images/BikesOverview_1.jpg'

import tr11 from '../../images/BikeButton_TR11.gif'
import patrol from '../../images/BikeButton_Patrol.gif'
import pbj from '../../images/BikeButton_PBJ.gif'
import ripcord from '../../images/BikeButton_Ripcord.gif'
import scout from '../../images/BikeButton_Scout.gif'
import sentinel from '../../images/BikeButton_Sentinel.gif'
import smuggler2 from '../../images/BikeButton_Smuggler2.gif'
import throttle from '../../images/BikeButton_Throttle.gif'
import vanquish from '../../images/BikeButton_Vanquish.gif'

class Bikes extends Component {
    constructor() {
        super()
        this.state = {
            display: 'bikes'
        }

        this.handleBikeClick = this.handleBikeClick.bind(this)
    }

    handleBikeClick(whichBike) {
        this.setState({
            display: whichBike.toString()
        })
    }

    render() {
        console.log(this.props.match.params.bikeId)
        console.log(this.state.displayBike)

        let bikeDisplay = <div className="Bikes_mainContainer">
            <img className="Home_mainImg" src={bikesOverview} alt="" />
            <BikeTile bikeTileTitle="TR11" bikeTileImage={tr11} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" bikeSelect={this.handleBikeClick} />
            <BikeTile bikeTileTitle="SENTINEL" bikeTileImage={sentinel} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="PATROL" bikeTileImage={patrol} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="SCOUT" bikeTileImage={scout} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="SMUGGLER" bikeTileImage={smuggler2} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="THROTTLE" bikeTileImage={throttle} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="VANQUISH" bikeTileImage={vanquish} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="PBJ" bikeTileImage={pbj} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="RIPCORD" bikeTileImage={ripcord} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
        </div>

        if (this.state.displayBike) {
            let whichBike = ''
            if (this.props.match.params.bikeId) {
                whichBike = this.props.match.params.bikeId.toString()
            }
            console.log(whichBike)
            switch (whichBike) {
                case 'tr11':
                    bikeDisplay = <TR11 />
                    break
                case 'PATROL':
                    bikeDisplay = <Patrol />
                    break
                case 'PBJ':
                    bikeDisplay = <PBJ />
                    break
                case 'RIPCORD':
                    bikeDisplay = <Ripcord />
                    break
                case 'SCOUT':
                    bikeDisplay = <Scout />
                    break
                case 'SENTINEL':
                    bikeDisplay = <Sentinel />
                    break
                case 'SMUGGLER':
                    bikeDisplay = <Smuggler />
                    break
                case 'THROTTLE':
                    bikeDisplay = <Throttle />
                    break
                case 'VANQUISH':
                    bikeDisplay = <Vanquish />
                    break
                default:
                    bikeDisplay = <div>So sorry, it appears this bike does not exist.</div>
                    break
            }
        }

        return bikeDisplay
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Bikes)