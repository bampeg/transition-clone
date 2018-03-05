import React from 'react'
import './TR11.css'

import TR11MainImg from '../../images/Bikes_MainActionImage_TR11.jpg'
import TR11FullImg from '../../images/Bikes_MainDark_TR11_V3.jpg'

import TR11Feature1 from '../../images/Features_TR11_1.jpg'
import TR11Feature2 from '../../images/Features_TR11_2.jpg'
import TR11Feature3 from '../../images/Features_TR11_3.jpg'
import TR11Feature4 from '../../images/Features_TR11_4.jpg'
import TR11Feature5 from '../../images/Features_TR11_5.jpg'
import TR11Feature6 from '../../images/Features_TR11_6.jpg'

export default function TR11() {
    return (
        <div className="TR11_container">
            <img className="TR11_mainImg" src={TR11MainImg} alt="" />
            <div className="TR11_blockMessage">
                We're back in the DH game with a vengeance and quite possibly one of the best looking bikes we have ever designed. The TR11 has stacked up 3 World Cup pro podium wins underneath Tahnee Seagrave and proven itself as one of the top downhill machines on the market. The all carbon frameset is extremely light and stiff and takes minimal effort to move the bike where you want it to go. Almost feels like cheating. The TR11 is also extremely playful for the days you want to switch it up from DH race track to bike park and take to the air and get creative on the trail.
            </div>
            <img className="TR11_mainImg" src={TR11FullImg} alt="" />
            <div className="TR11_features">
                <img className="TR11_feature" src={TR11Feature1} alt="" />
                <img className="TR11_feature" src={TR11Feature2} alt="" />
                <img className="TR11_feature" src={TR11Feature3} alt="" />
                <img className="TR11_feature" src={TR11Feature4} alt="" />
                <img className="TR11_feature" src={TR11Feature5} alt="" />
                <img className="TR11_feature" src={TR11Feature6} alt="" />
            </div>

        </div>
    )
}