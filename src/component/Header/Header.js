import { React, useEffect, useState } from "react";
import { UserOutlined, CloseOutlined } from "@ant-design/icons";
import {
  HiMenu,
  HiOutlineX,
  HiOutlineLogin,
} from "react-icons/hi";
import "./Header.css";
import { useNavigate } from "react-router-dom";

import { Avatar, Drawer, Space, Button } from "antd";
import isAuthenticated from "../../Helper/auth";
const Header = () => {

  const [click, setClick] = useState(false);
  let email = localStorage.getItem("email")
  const handleClick = () => setClick(!click); 

  const [openDrawer,setOpenDrawer] = useState(false)
  const [companyName , setCompanyName]  = useState()
      const checkLoggedIn = async() => {
        let response = await isAuthenticated();
        setCompanyName(response);
      };

      useEffect(() => {
        checkLoggedIn();
      }, []); 

      const showDrawer = () => {
         if(companyName){
         setOpenDrawer(true);
         }
       };

       const myAccount = ()=> {
        alert("we are working on it")
       }

      const signOut = ()=>{
        setOpenDrawer(false)
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        window.location.reload();

      }

const onClose = ()=>{
  setOpenDrawer(false)
}
  return (
    <header>
      <div className="navbar">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <HiOutlineX className="icon" />
          ) : (
            <HiMenu className="icon" />
          )}
        </div>
        <div className="container__logo">
          <a href="/">
            <span>MyFac8ry</span> <br />
          </a>
          <span className="tagline">Future of Manufacturing</span>
        </div>
        <div className="container">
          <div className="navmenu__item">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li>
                <a href="/cncmachining/">CNC Machining</a>
              </li>
              <li>
                <a href="/sheetmetal/">Sheet Metal</a>
              </li>
              <li>
                <a href="/injectionmolding/">Injection Molding</a>
              </li>
              <li>
                <a href="/3dprinting/">3D Printing</a>
              </li>
              <li>
                <a href="/customfabrication/">Custom Fabrication</a>
              </li>
              <li className="how__we__diffrent">
                <a href="/aboutus/">How we're diffrent</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="signin__button">
          {companyName ? (
            <div className="after__signin" onClick={showDrawer}>
              <Avatar size={"large"} className="after__signin__Drawer">
                {companyName.slice(0, 1).toUpperCase()}
              </Avatar>
            </div>
          ) : (
            <>
              <button>
                <a href="/signin">Sign In</a>
              </button>
              <div className="signin__button__mobile">
                <a href="/signin">
                  <HiOutlineLogin className="icon" />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      <Drawer
        className="drawer"
        open={openDrawer}
        onClose={onClose}
        closeIcon={false}
        title={
          <div className="profile_details">
            <Avatar shape="square" icon={<UserOutlined />} />
            <div className="profile_details__name">
              <h5>{companyName}</h5>
              <h6>{email}</h6>
            </div>
          </div>
        }
        width={"378px"}
        size="default"
        mask
        style={{
          backgroundColor: "white",
          marginTop: "76px",
        }}
        extra={
          <Space>
            <CloseOutlined onClick={onClose} style={{ color: "red" }} />
          </Space>
        }
      >
        <div className="profile_details__signout">
          <div className="myaccount">
            <Button onClick={myAccount}>My Account</Button>
          </div>
          <div className="signout">
            <Button onClick={signOut} type="primary">
              Sign Out
            </Button>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
