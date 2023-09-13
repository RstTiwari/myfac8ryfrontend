import React from "react";
import "./Style.css";
import "../component/Hero/Hero.css";
import { FaCalendarCheck } from "react-icons/fa";
import Orderprocess from "../component/Orderprocess/Orderprocess";
import "../component/Orderprocess/Orderprocess.css";
import Footer from "../component/Footer/Footer";
import "../component/Footer/Footer.css";

import LathImage from "../Assets/aboutus.jpg";
import LathImage2 from "../Assets/aboutus2.jpg";
// import { IoShieldCheckmarkOutline } from "react-icons/io5";
// import { BiLock } from "react-icons/bi";
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
                      <h1>WE’RE BUILDING THE FUTURE OF ENGINEERING</h1>
                    </div>
                    <div className="hero__landingtext">
                      <div className="hero__landingtext__subheadline">
                        Connecting the best engineers with the best
                        manufacturers – on demand and at scale <br />
                        Got a question, need advice or simply want to learn
                        more? Let us know! We’d love to hear from you
                      </div>
                      {/* <div className="hero__landingtext__symbol">
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
                      </div> */}
                    </div>
                    <div className="hero__landing__logo">
                      <a
                        href="mailto: info.myfac8ry@gmail.com"
                        className="instant__quote__button"
                      >
                        TALK WITH TEAM
                      </a>
                    </div>
                    {/* <div>
                      <p className="secure__lock">
                        <BiLock className="fa__lock" />
                        All uploads are secure and confidential.
                      </p>
                    </div> */}
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
          <h1 className="pageRowTitle"> WHO WE ARE</h1>
          <p className="rowHeadingTagline">
            Myfac8ry was founded in Mumbai in 2021, with the goal of
            transforming and streamlining the manufacturing industry. Since
            then, we’re proud to have become the digital manufacturing platform
            of choice for over 120+ professional engineers and procurement teams
            from over 50 fast-moving hardware companies, and to have partnered
            with over 50 exceptional suppliers in acroos globe. Despite this
            rapid growth, our mission has always remained the same. We keep
            innovation, constant learning and exceptional customer support at
            the heart of what we do. We are building a world where affordable
            yet world-class innovation is available to all from a single access
            point, and we can’t wait for you to join us!
          </p>
        </div>
        <div className="rowImage">
          <img alt="bgImg2" className="pageRowImage" src={LathImage2} />
        </div>
      </div>
      <div>
        <div className="pageRow3">
          <h1 className="pageRowTitle">OUR VALUES</h1>
          <div className="pageRow3__InnerDiv">
            <div className="pageRowPartA">
              <h1 className="pageRowTitle">INNOVATION</h1>
              <p className="rowHeadingTagline">
                Innovation is at the heart of what we do. We’re committed to
                constant learning, continual improvement and endless curiosity.
              </p>
            </div>
            <div className="pageRowPartB">
              <h1 className="pageRowTitle">INTEGRITY</h1>
              <p className="rowHeadingTagline">
                We believe in honesty, transparency and open communication at
                every stage of the manufacturing process. We’re dedicated to
                providing world-class customer service, and will never keep you
                waiting for a response.
              </p>
            </div>

            <div className="pageRowPartB">
              <h1 className="pageRowTitle">INCLUSIVITY</h1>
              <p className="rowHeadingTagline">
                We celebrate our differences, and are a close-knit team from
                diverse backgrounds who are working towards a common goal.
              </p>
            </div>
            <div className="pageRowPartB">
              <h1 className="pageRowTitle">IMPACT</h1>
              <p className="rowHeadingTagline">
                We want both our customers and suppliers to feel the impact of
                what we do -and we won’t settle for anything less than 100%
                customer and supplier satisfaction.
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
