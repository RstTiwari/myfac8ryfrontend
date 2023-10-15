import { React, useEffect, useState } from "react";
import { UserOutlined, CloseOutlined } from "@ant-design/icons";
import {
  HiMenu,
  HiOutlineX,
  HiOutlineLogin,
} from "react-icons/hi";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

import { Avatar, Drawer, Space, Button, Dropdown } from "antd";
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
const  items = [
  {
    key: '1',
    label: (
      <Link to ={"/mechanical/"} >
       MAJOR- PROJECTS
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to={"/mini-mechanical/"}>
        MINI-PROJECTS
      </Link>
    ),
  }

];
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
            <span>MerakiInnovation</span> <br />
          </a>
          <span className="tagline">"Where Ideas Take Shape"</span>
        </div>
        <div className="container">
          <div className="navmenu__item">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li>
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger = {["hover"]}
                  arrow ={true}
                >
                    <Space>
                    MECHANICAL PROJECTS
                    </Space>
                </Dropdown>

              </li>
              <li>
                <a href="/hardware/">HARDWARE PROJECTS</a>
              </li>
              <li>
              <a href="/industrial/">INDUSTRIAL PROJECTS</a>
              </li>
              <li>
              <a href="/ai-ml/">AI-ML PROJECTS</a>

              </li>
            </ul>
          </div>
        </div>
        <div className="signin__button">
          {companyName ? (
            <div className="after__signin" onClick={showDrawer}>
              <Avatar size={"large"}>
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
