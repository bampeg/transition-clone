import React from 'react'
import './FunFaces.css'
import HoverImage from '../HoverImage/HoverImage'

import kyleOn from '../../images/2018EmployeeProfile_Kyle_Off.gif'
import kyleOff from '../../images/2018EmployeeProfile_Kyle_On.gif'

export default function FunFaces() {
    return (
        <div className="FunFaces_mainContainer">
            <HoverImage defaultImage={kyleOff} hoverImage={kyleOn}/>
        </div>
    )
}