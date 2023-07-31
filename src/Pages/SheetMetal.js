import React from "react";
import "./Style.css";
import "../component/Hero/Hero.css";
import { FaCalendarCheck } from "react-icons/fa";
import Orderprocess from "../component/Orderprocess/Orderprocess";
import "../component/Orderprocess/Orderprocess.css";
import Footer from "../component/Footer/Footer";
import "../component/Footer/Footer.css";

import LathImage from "../Assets/myfac8rySheetMetal2.jpg";
import LathImage2 from "../Assets/myfac8ry_sheetMetal.jpg";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BiLock } from "react-icons/bi";
const CNCMachinging = () => {
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
                      <h1>THE SHEET META PARTS</h1>
                    </div>
                    <div className="hero__landingtext">
                      <div className="hero__landingtext__subheadline">
                        Delivering immaculate Sheet Metal parts worldwide in as
                        little as 4 days. Whether you’re looking for low or high
                        volumes of sheet metal parts, we’ve got you covered.
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
                        GET SHEET METAL QUOTE
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
            ORDER HIGH-QUALITY SHEET METAL PARTS ONLINE
          </h1>
          <p className="rowHeadingTagline">
            At Myfac8ry, we’re proud to partner with 150+ experienced and highly
            vetted manufacturers, who have a proven track record of making
            high-precision Sheet Metal parts (cut, folded and finished) for
            customers all over the globe. With our partners’ expertise, our
            engineers’ attention to detail and our entire team’s commitment to
            exceptional quality assurance at every stage, you can rest assured
            that with Myfac8ry, you’ll receive the perfect Sheet Metal parts –
            the first time, every time.
          </p>
        </div>
        <div className="rowImage">
          <img alt="bgImg2" className="pageRowImage" src={LathImage2} />
        </div>
      </div>
      <div>
        <div className="pageRow3">
          <h1 className="pageRowTitle">OUR SHEET METAL CAPABILITIES</h1>
          <div className="pageRow3__InnerDiv">
            <div className="pageRowPartA">
              <h1 className="pageRowTitle">WATERJET CUTTING</h1>
              <p className="rowHeadingTagline">
                Our Waterjet Cutting service is ideal for cutting Sheet Metal
                components between 18mm-40mm.
              </p>
            </div>
            <div className="pageRowPartB">
              <h1 className="pageRowTitle">LASER CUTTING</h1>
              <p className="rowHeadingTagline">
                We offer high-precision fibre and CO2 Laser Cutting to produce
                the most accurate cuts and contours possible to flat metal
                sheets.
              </p>
            </div>
            <div className="pageRowPartB">
              <h1 className="pageRowTitle">BENDING SERVICES</h1>
              <p className="rowHeadingTagline">
                Whether you’re after magnetic or hydraulic bending of Sheet
                Metal components, we’ve got you covered.
              </p>
            </div>
            <div className="pageRowPartB">
              <h1 className="pageRowTitle">FABRICATION SERVICES</h1>
              <p className="rowHeadingTagline">
                Order Sheet Metal Fabricated parts of the highest quality –
                delivered to your door in days.
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

export default CNCMachinging;
