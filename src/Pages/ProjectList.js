import React, { useState, useEffect } from "react";
import "./Style.css";
import "../component/Hero/Hero.css";
import { useNavigate } from "react-router-dom";

import { FaCalendarCheck } from "react-icons/fa";
import Orderprocess from "../component/Orderprocess/Orderprocess";
import "../component/Orderprocess/Orderprocess.css";
import Footer from "../component/Footer/Footer";
import "../component/Footer/Footer.css";
import { AxiosCall } from "../API/Axios";
import LathImage from "../Assets/myFac8ry__cnc_machining.png";
import LathImage2 from "../Assets/myFac8ry__lathe__turrning.png";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BiLock } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProjectList = ({ type }) => {
  const [projectData, setProjectData] = useState([]);
  let navigate = useNavigate();

  const getProjectList = async () => {
    try {
      let data = await AxiosCall("post", "projectList", {
        projectType: type,
      });

      if (data.success === 0) {
        alert("some error pls try again");
        navigate("/");
      }
      setProjectData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjectList();
  }, []);

  return (
    <div className="page__border">
      {/* <div className="pageRow1">
        <div className="hero__section">
          <div className="hero_container">
            <section className="hero_container__section">
              <div className="hero_container__section1">
                <div className="row">
                  <div className="hero_homepage">
                    <div className="hero__landingheader">
                      <h1>THE CNC MACHINING PARTS</h1>
                    </div>
                    <div className="hero__landingtext">
                      <div className="hero__landingtext__subheadline">
                        World-class computer numerical control (CNC) machined
                        parts delivered to your door in days. A wide variety of
                        CNC materials and secondary finishes available from our
                        manufacturing partners.
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
                         CNC PART QUOTE
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
            ORDER HIGH-QUALITY CNC MACHINED PARTS ONLINE
          </h1>
          <p className="rowHeadingTagline">
            We’re proud to be partnered with 180+ highly vetted CNC partners,
            who have a proven track record of making high-quality mechanical
            parts for customers all over the globe. With our partners’
            expertise, our engineers’ attention to detail and our entire team’s
            commitment to exceptional quality assurance at every stage, you can
            rest assured that with Myfac8ry, you’ll receive the perfect CNC
            Machined parts – the first time, every time.
          </p>
        </div>
        <div className="rowImage">
          <img alt="bgImg2" className="pageRowImage" src={LathImage2} />
        </div>
      </div> */}
      <div>
        <div className="pageRow3">
          <h1 className="pageRowTitle">
            List of All {type.toUpperCase()} PROJECTS
          </h1>
          <div className="pageRow3__InnerDiv">
            <div className="pageRowPartA">
              {projectData.length > 0 ? (
                projectData.map((item) => {
                  return (
                    <ol key={item.projectId}>
                      <Link to={`/productDetails/${item.projectId}`}>
                        {item.title}
                      </Link>
                    </ol>
                  );
                })
              ) : (
                <h3>No Project Found P Try Again</h3>
              )}
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
