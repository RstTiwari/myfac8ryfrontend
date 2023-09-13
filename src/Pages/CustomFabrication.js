import React from "react";
import "./Style.css";
import "../component/Hero/Hero.css";
import { FaCalendarCheck } from "react-icons/fa";
import Orderprocess from "../component/Orderprocess/Orderprocess";
import "../component/Orderprocess/Orderprocess.css";
import Footer from "../component/Footer/Footer";
import "../component/Footer/Footer.css";

import LathImage from "../Assets/myfac8ry_ai.jpg";
import LathImage2 from "../Assets/myfac8ry_coustom_fabrication.jpg";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BiLock } from "react-icons/bi";
const ProjectList = () => {
  return (
    <div className="page__border">
      <div className="pageRow1">
        <div className="hero__section">
          <div className="hero_container">
            <section className="hero_container__section">
              <div className="hero_container__section1">
                <div className="row">
                  <div className="hero_homepage">
                    <div className="hero__landingheader">
                      <h1>
                         YOUR DESIGN INTO REALLLITY WITH OUR COUSTOM
                         PART
                      </h1>
                    </div>
                    <div className="hero__landingtext">
                      <div className="hero__landingtext__subheadline">
                        Your one-stop shop for world-class manufacturing guides,
                        technical information and best practices
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
                      <a
                        href="/customerarea"
                        className="instant__quote__button"
                      >
                        COUSTOM PART QUOTE
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
            <img className="bgImage" alt="bgImage" src={LathImage} />
          </div>
        </div>
      </div>
      <div className="pageRow2">
        <div className="rowHeading">
          <h1 className="pageRowTitle">
            ORDER HIGH-QUALITY COUSTOM FABRICATION PARTS 
          </h1>
          <p className="rowHeadingTagline">
            We’re proud to be partnered with 180+ highly vetted Coustom Fabrication partners,
            who have a proven track record of making high-quality mechanical
            parts for customers all over the globe. With our partners’
            expertise, our engineers’ attention to detail and our entire team’s
            commitment to exceptional quality assurance at every stage, you can
            rest assured that with Myfac8ry, you’ll receive the perfect Coustom
            Machined parts – the first time, every time.
          </p>
        </div>
        <div className="rowImage">
          <img alt="bgImg2" className="pageRowImage" src={LathImage2} />
        </div>
      </div>
      <div>
        {/* <div className="pageRow3">
          <h1 className="pageRowTitle">OUR CNC SERVICE CAPABILITIES</h1>
          <div className="pageRow3__InnerDiv">
            <div className="pageRowPartA">
              <h1 className="pageRowTitle">CNC MILLING</h1>
              <p className="rowHeadingTagline">
                Our diverse, global supply chain offers an extensive range of
                capabilities. Whether you are looking for one-off prototypes or
                large-scale batch manufacture, we can deliver repeatedly on
                quality and lead time. Our partners operate virtually every kind
                of CNC machine, including mills, lathes, mill-turns, multi-axis
                machines, sliding head lathes and bar fed lathes. We also offer
                CNC grinding and EDM processes. This allows us to utilise the
                correct tool for the job to meet requirements at a competitive
                price.
              </p>
            </div>
            <div className="pageRowPartB">
              <h1 className="pageRowTitle">CNC TURNING</h1>
              <p className="rowHeadingTagline">
                With our standard tolerance being +/- 0.127mm on all CNC Turned
                parts and the ability to refine that even more, Geomiq offers
                only the best CNC Turning services. With 1400+ machines in our
                network, we guarantee a great price while maintaining the
                highest level of quality and fastest delivery possible. So if
                you are looking to have parts turned with a high level of
                accuracy and need parts made right the first time, you have come
                to the right place.
              </p>
            </div>
          </div>
        </div> */}
        <div className="PageRow4">
          <Orderprocess />
        </div>
        <div className="pageRow5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
