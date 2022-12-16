import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../Signup/Signup.css"
import Loader from "../../Helper/Loader"

let dev = false;
let url = "https://myfac8ryapi.vercel.app/api/";
if (dev) {
  url = "http://localhost:4000/api/";
}

const Signup = () => {
  const [signup , setsignup]  = useState({
    companyName:"",
    name:"",
    email:"",
    number :"",
    password :""

})

const [ loader , setLoader]   = useState(false)
const navigate = useNavigate()

const handleSubmit = async (event) => {
  event.preventDefault();
  if (!signup.companyName || !signup.email || !signup.name || !signup.number){
    alert("please fill all details")
  }else{
    setLoader(true)
    setsignup(signup);
    let response = await axios.post(
      `${url}signup`,
      signup
    );
    if (response.data.success === 0) {
      setLoader(false)
      alert(`${response.data.message}`);
    } else {
      setLoader(false)
      navigate("/signin");
      alert(`${response.data.message}`);
    }

  } 

  }

  return (
    <div>
      <>
      {loader === true ? (<Loader />):(        <div className="parent clearfix">
          <div className="bg-illustration">
            <div className="burger-btn">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="signup">
            <div className="container">
              <h1>
                Welcome to MyFac8ry <br />
                Join us Now
              </h1>
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
                    defaultValue={signup.person || ""}
                    onChange={(e) =>
                      setsignup({ ...signup, name:e.target.value })
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

                  <button type="submit" onClick={handleSubmit}>
                    SIGN Up
                  </button>
                </form>
                <div className="signup-page">
                  <span>
                    already Member? &ensp; <a href="/signin">Sign In</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>)}

      </>
    </div>
  );
}

export default Signup
