import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AxiosCall } from "../../API/Axios";
import "./Signin.css"
import price  from "../../Assets/myfac8ryPrice.svg"
import Quality from "../../Assets/myfac8ryQualityAssurance.svg"
import Fastest from "../../Assets/myfac8ryFasted.svg"
import Loader from '../../Helper/Loader';
import { Button } from 'antd';


const Signin = () => {
  const [login , setLogin] = useState({
    email:"",
    password :""
  })      
  const [loader, setLoader] = useState(false);

 let navigate = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!login.email || !login.password){
      alert("Pleas Provide all details")
    }else{
          setLogin(login);
          setLoader(true)
          try {
            let response = await AxiosCall("POST", "signin", login);
            if (response.success === 0) {
              setLoader(false);
              alert(`${response.message}`);
            } else {
              setLoader(false);
              alert("Login succesfull");
              navigate("/");
              localStorage.setItem("token", response.token);
              localStorage.setItem("user", response.user.companyName);
              localStorage.setItem("number", response.user.number);
              localStorage.setItem("email", response.user.email);


              setLogin("");
            }
          } catch (error) {
            alert("Sever is not working try again")
            setLoader(false);

          }
          

    }



  }
  return (
    <>
      {loader === true ? (
        <Loader />
      ) : (
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
          <div className="login">
            <div className="container">
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
                  <Button
                    style={{ backgroundColor: "blue", color: "white" }}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    LOG-IN
                  </Button>
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
      )}
    </>
  );
}

export default Signin
