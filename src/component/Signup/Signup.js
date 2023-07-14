import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Signup/Signup.css"
import { AxiosCall } from '../../API/Axios';


const Signup = () => {
  const [signup , setsignup]  = useState({
    companyName:"",
    name:"",
    email:"",
    number :"",
    password :""

})
const navigate = useNavigate()

const handleSubmit = async (event) => {
  event.preventDefault();
  if (!signup.companyName || !signup.email || !signup.name || !signup.number){
    alert("please fill all details")
  }else{
    setsignup(signup);
    let response = await AxiosCall("POST","signup",signup)
    if (response.success === 0) {
      alert(`${response.message}`);
    } else {
      navigate("/signin");
      alert(`${response.message}`);
      setsignup("")
    }

  } 

  }

  return (
    <div>
      <>
        <div className="parent clearfix">
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
        </div>
      </>
    </div>
  );
}

export default Signup
