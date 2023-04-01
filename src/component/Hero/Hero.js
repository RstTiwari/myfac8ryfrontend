import React from 'react'
// import { FaCalendarCheck } from "react-icons/fa";
// import {IoShieldCheckmarkOutline} from "react-icons/io5"
// import {BiLock} from "react-icons/bi"
import "./Hero.css"
import team from "../../Assets/6909.jpg"
import "../IndustrialCards/IndustrialCard.css";
import aihelp from "../../Assets/aitech2.jpg";


const Hero = () => {
  return (
    <div className="home">
      <div className="carouselDiv">
        <div className="aieffectDiv">
          <h1 className="aitext">AI Cloud  Industrial Solution </h1>
          <p>
            With our AI solution,Keep track of Production,Inventory Quality.
            <span> MyFac8ry AI Powered  help you in </span> ,
            <span> Increase Productivity,</span>
            <span> Decrese Inventory,</span>
            <span> Improve Quality ,</span>
          </p>
          <div className="quotation_button">
            <div className="hero__landing__logo">
              <a href="/" className="instant__quote__button">
                Start Your Free Trial
              </a>
            </div>
          </div>
        </div>
        <div className="imageDiv">
          <img className="softwareImges" alt="assistant" src={aihelp} />
        </div>
      </div>
    </div>
  );
}

export default Hero
