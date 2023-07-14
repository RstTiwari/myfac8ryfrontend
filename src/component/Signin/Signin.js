import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AxiosCall } from "../../API/Axios";
import "./Signin.css"


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
          let response = await AxiosCall("POST", "signin",login);
          if (response.success === 0) {
            alert(`${response.message}`);
          } else {
            alert("Login succesfull")
            navigate("/");
            localStorage.setItem("token", response.token)
            localStorage.setItem("user", response.user.companyName);
            localStorage.setItem("number", response.user.number);

            setLogin("")
            
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
