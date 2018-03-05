import React from 'react'
import { Link } from 'react-router-dom'
import './BikeTile.css'

export default function BikeTile(props) {
    let {bikeTileTitle, bikeTileImage, bikeTileInfo1, bikeTileInfo2} = props
    return (
        <div className="BikeTile_container">
            <Link to={`/Bikes/${bikeTileTitle}`}><img onClick={() => props.bikeSelect(bikeTileTitle)} className="BikeTile_image" src={bikeTileImage} alt=""/></Link>
            <Link to={`/Bikes/${bikeTileTitle}`}><div onClick={() => props.bikeSelect(bikeTileTitle)} className="BikeTile_button">{bikeTileTitle}</div></Link>
            <div className="BikeTile_info">{bikeTileInfo1}</div>
            <div className="BikeTile_info">{bikeTileInfo2}</div>
        </div>
    )
}