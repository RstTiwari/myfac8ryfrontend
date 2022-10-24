import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import "../SignIn/Signin.css"

const Signin = () => {
  const [login , setLogin] = useState({
    email:"",
    password :""
  })      
 let navigate = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    setLogin(login)
    console.log(login)
    let response = await axios.post("http://localhost:4000/api/signin", login);
    console.log("response", response);
    if(response.data.success === 0){
      alert(`${response.data.message}`);
    }else{
    console.log("response", response);
    navigate("/");
    }


  }
  return (
    <>
      <div className="parent clearfix">
        <div className="bg-illustration">
          <div className="burger-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="login">
          <div className="container">
            <h1>Welcome to MyFac8ry</h1>
            <div className="login-form">
              <form action="">
                <input
                  type="email"
                  placeholder="E-mail Address"
                  defaultValue={login.email || ""}
                  onChange={(e) =>
                    setLogin({ ...login, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  defaultValue={login.password || ""}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />

                <div className="remember-form">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <div className="forget-pass">
                  <a href="#">Forgot Password ?</a>
                </div>
                <button type="submit" onClick={handleSubmit}>
                   LOG-IN
                </button>
              </form>
              <div className="signup-page">
                <span>
                  New to MyFac8ry? &ensp; <a href="/signup">Join Now</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin
