import React from "react";
import "./Style.css";
import "../component/Hero/Hero.css";
import { FaCalendarCheck } from "react-icons/fa";
import Orderprocess from "../component/Orderprocess/Orderprocess";
import "../component/Orderprocess/Orderprocess.css";
import Footer from "../component/Footer/Footer";
import "../component/Footer/Footer.css";

import LathImage from "../Assets/myfac8ry__injection_molding1.jpg";
import LathImage2 from "../Assets/myfac8ry__injection_molding2.jpg";
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
                      <h1>THE INJECTION MOULDING PART</h1>
                    </div>
                    <div className="hero__landingtext">
                      <div className="hero__landingtext__subheadline">
                        World-class Injection Moulded parts delivered to your
                        door in as little as 15 days. We cater for both low
                        volume or serial production moulding requirements.
                      </div>
                      <div className="hero__landingtext__symbol">
                        <div className="hero__landingtext__symbol1">
                          <div className="hero__landingtext__symbol__time">
                            <FaCalendarCheck className="fa_calender" />
                          </div>
                          <div className="hero__landingtext__symbol__text">
                            Parts in as Fast as 15 Days
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
                         MOLDED PART QUOTE
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
      <div className="pageRow2Injection">
        <div className="rowHeading">
          <h1 className="pageRowTitle">
            ORDER HIGH-QUALITY INJECTION MOULDED PARTS
          </h1>
          <p className="rowHeadingTagline">
            Whether you’re after rapid prototyping and low volume production
            moulding, our experts in rapid tooling, family moulds, multi-cavity
            moulds or overmoulding will ensure your samples are ready in days.
            Injection moulding is the most cost-effective way to make a perfect
            plastic part at scale. At Geomiq, we’re proud to partner with 150+
            experienced and highly vetted manufacturers, who have a proven track
            record of making high-precision Injection Moulded parts for
            customers all over the globe. With our partners’ expertise, our
            engineers’ attention to detail and our entire team’s commitment to
            exceptional quality assurance at every stage
          </p>
        </div>
        <div className="rowImage">
          <img alt="bgImg2" className="pageRowImage" src={LathImage2} />
        </div>
      </div>
      <div>
        <div className="pageRow3Injection">
          <h1 className="pageRowTitle">OUR INJECTION MOULDING CAPABILITIES</h1>
          <div className="pageRow3__InnerDiv">
            <div className="pageRowPartA">
              <h1 className="pageRowTitle">INSERT MOULDING</h1>
              <p className="rowHeadingTagline">
                Order low-cost, repeatable plastic components at scale
              </p>
            </div>
            <div className="pageRowPartB">
              <h1 className="pageRowTitle">OVERMOULDING</h1>
              <p className="rowHeadingTagline">
                We’re proud to cater for all your Overmoulding needs
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
