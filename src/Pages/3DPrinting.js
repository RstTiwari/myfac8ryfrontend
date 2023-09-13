import React from "react";
import "./Style.css";
import "../component/Hero/Hero.css";
import { FaCalendarCheck } from "react-icons/fa";
import Orderprocess from "../component/Orderprocess/Orderprocess";
import "../component/Orderprocess/Orderprocess.css";
import Footer from "../component/Footer/Footer";
import "../component/Footer/Footer.css";

import LathImage from "../Assets/myfac8ry3dPrint2.jpeg";
import LathImage2 from "../Assets/Myfac8ry__3dprinted__part.jpg"
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
                      <h1>3D PRINTING PARTS</h1>
                    </div>
                    <div className="hero__landingtext">
                      <div className="hero__landingtext__subheadline">
                        Delivering world-class SLA, SLS, FDM, MJF and DMLS 3D
                        Printed parts in as little as 3 days. You’ll receive the
                        perfect 3D printed parts – the first time, every time.
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
                        3D PRINTED PART QUOTE
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
            ORDER HIGH-QUALITY 3D PRINTED PARTS ONLINE
          </h1>
          <p className="rowHeadingTagline">
            At Myfac8ry, we’re proud to partner with 160+ experienced and highly
            vetted manufacturers, who have a proven track record of making
            high-quality, high-precision 3D Printed parts for customers all over
            the globe. With our partners’ expertise, access to 120+ of the
            latest 3D printers, our engineers’ attention to detail and our
            entire team’s commitment to exceptional quality assurance at every
            stage, you can rest assured that with Myfac8ry, you’ll receive the
            perfect 3D Printed parts – the first time, every time.
          </p>
        </div>
        <div className="rowImage">
          <img alt="bgImg2" className="pageRowImage" src={LathImage2} />
        </div>
      </div>
      <div>
        <div className="pageRow3">
          <h1 className="pageRowTitle">OUR 3D PRINTING CAPABILITIES</h1>
          <div className="pageRow3__InnerDiv">
            <div className="pageRowPartA">
              <h1 className="pageRowTitle">DIRECT METAL LASER SINTERING</h1>
              <p className="rowHeadingTagline">
                We’re proud to cater for all of your high-precision DMLS (Direct
                Metal Laser Sintering) needs for the most demanding
                applications.
              </p>
            </div>
            <div className="pageRowPartB">
              <h1 className="pageRowTitle">HP MULTI-JET FUSION</h1>
              <p className="rowHeadingTagline">
                Our HP Multi-Jet Fusion 3D Printing service produces only the
                highest quality and consistent nylon parts using innovative
                InkJet technology
              </p>
            </div>
          </div>
        </div>
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
