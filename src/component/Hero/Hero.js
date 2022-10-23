import React from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import {IoShieldCheckmarkOutline} from "react-icons/io5"
import {BiLock} from "react-icons/bi"
import "./Hero.css"
import "../IndustrialCards/IndustrialCard.css";

const Hero = () => {
  return (
    <main className="hero_content">
      <section>
        <div className="hero_container">
          <section className="hero_container__section">
            <div className="hero_container__section1">
              <div className="row">
                <div className="hero_homepage">
                  <div className="hero__landingheader">
                    <h1> On Demand Industrial Services</h1>
                  </div>
                  <div className="hero__landingtext">
                    <div className="hero__landingtext__subheadline">
                      With over 200 manufacturers , suppliers in Vasai, our network has the
                      capacity you need for prototyping , production and mass
                      production.
                    </div>
                    <div className="hero__landingtext__symbol">
                      <div className="hero__landingtext__symbol1">
                        <div className="hero__landingtext__symbol__time">
                          <FaCalendarCheck className="fa_calender" />
                        </div>
                        <div className="hero__landingtext__symbol__text">
                          Parts in as Fast as 3 Days
                        </div>
                      </div>
                      <div className="hero__landingtext__symbol2">
                        <div className="hero__landingtext__symbol__quality">
                          <IoShieldCheckmarkOutline className="fa_shield" />
                        </div>
                        <div className="hero__landingtext__symbol__text">
                          Strong QA
                          <br />
                          ISO 9001 Certified
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero__landing__logo">
                    <a className="instant__quote__button">
                      Get Your Instant Quote
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
      </section>
    </main>
  );
}

export default Hero
