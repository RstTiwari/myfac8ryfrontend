import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import "./Signin.css"
let dev = false;
let url = "https://myfac8ryapistage.vercel.app/api/";
if(dev){
  url = "http://localhost:4000/api/";
}
const Signin = () => {
  const [login , setLogin] = useState({
    email:"",
    password :""
  })      
 let navigate = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!login.email || !login.password){
      alert("Pleas Provide all details")
    }else{
          setLogin(login);
          let response = await axios.post(
            `${url}signin`,
            login
          );
          if (response.data.success === 0) {
            alert(`${response.data.message}`);
          } else {
            alert("Login succesfull")
            navigate("/");
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user", response.data.user.companyName);
            
          }

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
                  <a href="/">Forgot Password ?</a>
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
