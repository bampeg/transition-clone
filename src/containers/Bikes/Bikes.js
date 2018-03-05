import React from 'react'
import './Bikes.css'
import BikeTile from '../../components/BikeTile/BikeTile'

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

export default function Bikes() {

    return (
        <div className="Bikes_mainContainer">
            <img className="Home_mainImg" src={bikesOverview} alt="" />
            <BikeTile bikeTileTitle="TR11" bikeTileImage={tr11} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="SENTINEL" bikeTileImage={sentinel} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="PATROL" bikeTileImage={patrol} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="SCOUT" bikeTileImage={scout} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="SMUGGLER" bikeTileImage={smuggler2} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="THROTTLE" bikeTileImage={throttle} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="VANQUISH" bikeTileImage={vanquish} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="PBJ" bikeTileImage={pbj} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
            <BikeTile bikeTileTitle="RIPCORD" bikeTileImage={ripcord} bikeTileInfo1='27.5" Wheels' bikeTileInfo2="195mm Rear / 200mm Front" />
        </div>
    )

}
