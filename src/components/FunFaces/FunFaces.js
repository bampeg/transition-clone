import React from 'react'
import './FunFaces.css'
import HoverImage from '../HoverImage/HoverImage'

import kyleOff from '../../images/2018EmployeeProfile_Kyle_Off.gif'
import kyleOn from '../../images/2018EmployeeProfile_Kyle_On.gif'

import kevinOff from '../../images/2018EmployeeProfile_Kevin_Off.gif'
import kevinOn from '../../images/2018EmployeeProfile_Kevin_On.gif'

import camOff from '../../images/2018EmployeeProfile_Cam_Off.gif'
import camOn from '../../images/2018EmployeeProfile_Cam_On.gif'

import samOff from '../../images/2018EmployeeProfile_Sam_Off.gif'
import samOn from '../../images/2018EmployeeProfile_Sam_On.gif'

import chrisOff from '../../images/2018EmployeeProfile_Chris_Off.gif'
import chrisOn from '../../images/2018EmployeeProfile_Chris_On.gif'

import carlOff from '../../images/2018EmployeeProfile_Carl_Off.gif'
import carlOn from '../../images/2018EmployeeProfile_Carl_On.gif'

import larsOff from '../../images/2018EmployeeProfile_Lars_Off.gif'
import larsOn from '../../images/2018EmployeeProfile_Lars_On.gif'

import darrinOff from '../../images/2018EmployeeProfile_Darrin_Off.gif'
import darrinOn from '../../images/2018EmployeeProfile_Darrin_On.gif'

import blakeOff from '../../images/2018EmployeeProfile_Blake_Off.gif'
import blakeOn from '../../images/2018EmployeeProfile_Blake_On.gif'

import davidOff from '../../images/2018EmployeeProfile_David_Off.gif'
import davidOn from '../../images/2018EmployeeProfile_David_On.gif'

import joshOff from '../../images/2018EmployeeProfile_Josh_Off.gif'
import joshOn from '../../images/2018EmployeeProfile_Josh_On.gif'

import drewOff from '../../images/2018EmployeeProfile_Drew_Off.gif'
import drewOn from '../../images/2018EmployeeProfile_Drew_On.gif'

import skyeOff from '../../images/2018EmployeeProfile_Skye_Off.gif'
import skyeOn from '../../images/2018EmployeeProfile_Skye_On.gif'

export default function FunFaces() {
    return (
        <div className="FunFaces_mainContainer">
            <HoverImage defaultImage={kyleOff} hoverImage={kyleOn}/>
            <HoverImage defaultImage={kevinOff} hoverImage={kevinOn}/>
            <HoverImage defaultImage={camOff} hoverImage={camOn}/>
            <HoverImage defaultImage={samOff} hoverImage={samOn}/>
            <HoverImage defaultImage={chrisOff} hoverImage={chrisOn}/>
            <HoverImage defaultImage={carlOff} hoverImage={carlOn}/>
            <HoverImage defaultImage={larsOff} hoverImage={larsOn}/>
            <HoverImage defaultImage={darrinOff} hoverImage={darrinOn}/>
            <HoverImage defaultImage={blakeOff} hoverImage={blakeOn}/>
            <HoverImage defaultImage={davidOff} hoverImage={davidOn}/>
            <HoverImage defaultImage={joshOff} hoverImage={joshOn}/>
            <HoverImage defaultImage={drewOff} hoverImage={drewOn}/>
            <HoverImage defaultImage={skyeOff} hoverImage={skyeOn}/>
        </div>
    )
}