import React from 'react'
import FunFaces from '../../components/FunFaces/FunFaces'
import './Who.css'

import mainImg from '../../images/WhoOverview_1_Phone.jpg'
import bottomImg from '../../images/FactoryStoryInside.jpg'

export default function Who() {
    return (
        <div className="Who_container">
            <img className="Who_mainImg" src={mainImg} alt=""/>
            <FunFaces/>
            <div className="Who_paragraph">
                It's hard to believe that a friendly game of ping pong over 16 years ago was the catalyst to create Transition Bikes. During that game and many others to come, Kyle and Kevin laid out the plan to create their own bike company. It started with a simple philosophy of making a true rider owned company that was always open and honest with it's customers. Where a love for riding and making bikes resonated through every facet of the company. We are proud to say that after all these years, this philosophy has stayed with us while we have grown to reach more riders and connect in new ways. 
            </div>
            <div className="Who_paragraph">
                When it comes to designing bikes, our philosophy is simple. A bike should be fun and easy to ride from the first pedal stroke. It should invite you to push your limits, ride harder, and become a better rider. We believe a bike should work for all skill levels, sizes, and genders of riders. It should be easy to setup and tune so you can spend more time riding. We believe in simple designs that balance form and function, that allow riders to connect with the product while backing that up with industry leading ride quality. As riders, we are always looking for something that will benefit our riding experience. So you can be assured we are constantly pushing ourselves to find the next great thing that will put a smile on our faces.
            </div>
            <img className="Who_bottomImg" src={bottomImg} alt=""/>
            <div className="Who_contactInfoContainer">
                <div className="Who_contactHeader">COME VISIT US</div>
                <div className="Who_contactTitle">TRANSITION FACTORY STORE/HEADQUARTERS</div>
                <div className="Who_contactInfo">
                    <div>1600 Carolina St.</div>
                    <div>Bellingham, WA 98229 USA</div>
                    <div>Tuesday-Friday Noon-6pm</div>
                    <div>Saturday 10am-6pm</div>
                    
                    <div className="Who_space"></div>

                    <div>(360) 366-4960</div>
                    <div>info@transitionbikes.com</div>
                </div>
            </div>
            <iframe className="Who_vimeo" title="FarmerPatrol" src="https://player.vimeo.com/video/239713901" width="640" height="360" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"/>
        </div>
    )
}