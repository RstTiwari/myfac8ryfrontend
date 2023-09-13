import React from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import {IoShieldCheckmarkOutline} from "react-icons/io5"
import {BiLock} from "react-icons/bi"
import "./Hero.css"
import "../IndustrialCards/IndustrialCard.css";
import bgImage  from "../../Assets/myfac8ryProcess.svg"

const Hero = () => {
  return (
    <div className="hero_content">
      <div className="hero__section">
        <div className="hero_container">
          <section className="hero_container__section">
            <div className="hero_container__section1">
              <div className="row">
                <div className="hero_homepage">
                  <div className="hero__landingheader">
                    <h1>Crafting Innovation, Building Excellence </h1>
                  </div>
                  <div className="hero__landingtext">
                    <div className="hero__landingtext__subheadline">
                      With over 2000 innovative Projects, with presence across
                      the globe, our network has the capacity you need for
                      Industrial , Commercial,and Institutional Projects.
                    </div>
                    <div className="hero__landingtext__symbol">
                      <div className="hero__landingtext__symbol1">
                        <div className="hero__landingtext__symbol__time">
                          <FaCalendarCheck className="fa_calender" />
                        </div>
                        <div className="hero__landingtext__symbol__text">
                          Projects in as Fast as 3 Days
                        </div>
                      </div>
                      <div className="hero__landingtext__symbol2">
                        <div className="hero__landingtext__symbol__quality">
                          <IoShieldCheckmarkOutline className="fa_shield" />
                        </div>
                        <div className="hero__landingtext__symbol__text">
                          24/7 Support
                          <br />
                          Free Delivery
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero__landing__logo">
                    <a
                      href="https://wa.me/+918928772801"
                      className="instant__quote__button"
                    >
                      Talk To Expert
                    </a>
                  </div>
                  <div>
                    <p className="secure__lock">
                      <BiLock className="fa__lock" />
                      All uploads are secure and confidential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="hero__bgImage">
          <img className="bgImage" alt="bgImage" src={bgImage} />
        </div>
      </div>
    </div>
  );
}

export default Hero
