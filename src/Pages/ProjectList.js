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
import Loader from "../Helper/Loader";

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
                    <ol className="projectList" key={item.projectId}>
                      <Link className="projectLink" to={`/productDetails/${item.projectId}`}>
                        {item.title.toUpperCase()}
                      </Link>
                    </ol>
                  );
                })
              ) : (
                <Loader />
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
