import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Bikes.css'
import bikesOverview from '../../images/BikesOverview_1.jpg'

class Bikes extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="Bikes_mainContainer">
                <img className="Home_mainImg" src={bikesOverview} alt="" />
                <div className="Bikes_container">

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Bikes)