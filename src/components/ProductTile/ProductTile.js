import React from 'react'
import { connect } from 'react-redux'

function ProductTile(props) {
    let products = this.props.state.bikes.map(bike => {
        return(
            <img src={bike.bike_img} alt=""/>
        )
    } )
    return (
        <div className="ProductTile_container">
            <img src={} alt="" />
        </div>
    )
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(ProductTile)