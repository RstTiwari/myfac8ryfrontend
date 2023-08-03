import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Signup/Signup.css";

import { AxiosCall } from "../../API/Axios";
import price from "../../Assets/myfac8ryPrice.svg";
import Quality from "../../Assets/myfac8ryQualityAssurance.svg";
import Fastest from "../../Assets/myfac8ryFasted.svg";
import Loader from "../../Helper/Loader"
import { Button, Select } from "antd";

const Signup = () => {
  const [signup, setsignup] = useState({
    companyName: "",
    name: "",
    email: "",
    number: "",
    password: "",
    industryType: "",
  });
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !signup.companyName ||
      !signup.email ||
      !signup.name || 
      !signup.number 
    ) {
      alert("please fill all details");
    } else if (signup.number.length < 10) {
      alert("please select 10 digit number");
    } else if (  
      !signup.industryType 
    ) {
      alert("please select industryType");
    } else {
      setsignup(signup);
      setLoader(true);
      try {
        let response = await AxiosCall("POST", "signup", signup);
        if (response.success === 0) {
          alert(`${response.message}`);
          setLoader(false);
        } else {
          setLoader(false);
          navigate("/signin");
          alert(`${response.message}`);
          setsignup("");
        }
      } catch (error) {
        alert(error);
        
      }
    }
  };
  console.log(signup)

  return (
    <div>
      {loader === true ? (
        <Loader />
      ) : (
        <>
          <div className="parent_clearfix">
            <div className="bg__signin">
              <div className="signin__title__div">
                <h1 className="signin__title"> Welcome to MyFac8ry.com</h1>
              </div>

              <div className="signin__view__area">
                <h1 className="signin__title">
                  Smart Way of Manufactuirng With Myfac8ry.com
                </h1>
                <div className="signin__description__area">
                  <div className="signin__description">
                    <div className="signin__description__row">
                      <div className="signin__description__image">
                        <img alt="price" src={price} />
                      </div>
                      <div className="signin__description__text">
                        Economical Pricing
                      </div>
                    </div>
                    <div className="signin__description__row">
                      <div className="signin__description__image">
                        <img alt="quality" src={Quality} />
                      </div>
                      <div className="signin__description__text">
                        Quality Assurance
                      </div>
                    </div>
                    <div className="signin__description__row">
                      <div className="signin__description__image">
                        <img alt="fastest" src={Fastest} />
                      </div>
                      <div className="signin__description__text">
                        Delivering Fast...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="signup">
              <div className="container">
                <div className="signup-form">
                  <form action="">
                    <input
                      type="text"
                      placeholder="Company Name"
                      defaultValue={signup.companyName || ""}
                      onChange={(e) =>
                        setsignup({ ...signup, companyName: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Contact Person"
                      defaultValue={signup.name || ""}
                      onChange={(e) =>
                        setsignup({ ...signup, name: e.target.value })
                      }
                    />
                    <input
                      type="email"
                      placeholder="E-mail Address"
                      defaultValue={signup.email || ""}
                      onChange={(e) =>
                        setsignup({ ...signup, email: e.target.value })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Phone Number"
                      defaultValue={signup.number || ""}
                      onChange={(e) =>
                        setsignup({ ...signup, number: e.target.value })
                      }
                    />

                    <input
                      type="password"
                      placeholder="Password"
                      defaultValue={signup.password || ""}
                      onChange={(e) =>
                        setsignup({ ...signup, password: e.target.value })
                      }
                    />
                    <select
                      className="select"
                      defaultValue={signup.industryType}
                      onChange={(e) =>
                        setsignup({ ...signup, industryType: e.target.value })
                      }
                      placeholder="Select Industry"
                    >
                      <option value="">Select Industry</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Construction">Construction</option>
                      <option value="COUSTOM_FABRICATION">
                        COUSTOM FABRICATION
                      </option>
                      <option value="CNC_MACHINING">CNC MACHINING</option>
                      <option value="Consumer_Electronics">
                        Consumer_Electronics
                      </option>
                      <option value="Consumer_Products">
                        Consumer Products
                      </option>
                      <option value="Electronic_Manufacturing">
                        Electronic Manufacturing
                      </option>
                      <option value="Industrial_Automation">
                        Industrial Automation
                      </option>
                      <option value="INJECTION_MOLDING">
                        INJECTION MOLDING
                      </option>
                      <option value="Industrial_Engineering">
                        Industrial Engineering
                      </option>
                      <option value="LATH_MACHINING">LATH MACHINING</option>
                      <option value="3D_PRINTING">3D PRINTING</option>
                      <option value="Medical_Devices">Medical Devices</option>
                      <option value="SHEET METAL">SHEET METAL</option>
                    </select>
                    <Button
                      style={{ backgroundColor: "blue", color: "white" }}
                      type="submit"
                      onClick={handleSubmit}
                    >
                      SIGN Up
                    </Button>
                  </form>
                  <div className="signup-page">
                    <span>
                      already Member? &ensp; <a href="/signin">Sign In</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Signup;
