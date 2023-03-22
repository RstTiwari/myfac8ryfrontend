import React from 'react'
// import { FaCalendarCheck } from "react-icons/fa";
// import {IoShieldCheckmarkOutline} from "react-icons/io5"
// import {BiLock} from "react-icons/bi"
import "./Hero.css"
import team from "../../Assets/6909.jpg"
import "../IndustrialCards/IndustrialCard.css";

const Hero = () => {
  return (
    <div className="home">
      <div className="carouselDiv">
        <div className="aieffectDiv">
          <h1 className="aitext">AI Powered Industrial Softwares </h1>
          <p>
            With our AI solution softwares , manage your team at one place
            Assign Work track Record ,
            <span>MyFac8ry AI Powered Softwares help u in </span> ,
            <span> Accounts,</span>
            <span> Inventory,</span>
            <span> Design ,</span>
            <span> Quality </span>
          </p>
          <div className="quotation_button">
            <div className="hero__landing__logo">
              <a href="/feetrailPage" className="instant__quote__button">
                Start Your Free Trial
              </a>
            </div>
          </div>
        </div>
        <div className="imageDiv">
          <img className = "softwareImges" alt="assistant" src={require("../../Assets/6909.jpg")} />
        </div>
      </div>
    </div>
  );
}

export default Hero
