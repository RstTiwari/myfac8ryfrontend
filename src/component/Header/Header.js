import { React, useEffect, useState } from "react";
import {
  HiMenu,
  HiOutlineX,
  HiOutlineLogin,
  HiOutlineUserCircle,
} from "react-icons/hi";
import "./Header.css";
import {Drawer , Avatar,Button} from "antd"
import {UserOutlined,LogoutOutlined} from "@ant-design/icons"
import isAuthenticated from "../../Helper/auth";
const Header = () => {

  const [click, setClick] = useState(false);
  const [open ,setOpen] = useState(false)
    const logout = () => {
      localStorage.clear()
    };
  const [companyName , setCompanyName]  = useState()
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = ()=>{
      setOpen(false)
    }
  const checkLoggedIn = async() => {
    let response = await isAuthenticated();
    setCompanyName(response);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []); 
  return (
    <header>
      <div className="navbar">
        <div className="container__logo">
          <a href="/">
            <span>My</span>
            Fac8ry
          </a>
        </div>
        <div className="container">
          <div className="navmenu__item">
            {/* <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <a href="/"> Manufacturing</a>
              </li>
              <li>
                <a href="/"> Hardwares</a>
              </li>
              <li>
                <a href="/"> Raw Material</a>
              </li>
              <li>
                <a href="/"> Softwares</a>
              </li>
              <li className="how__we__diffrent">
                <a href="/">How we're diffrent</a>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="signin__button">
          {companyName ? (
            <div className="after__signin" onClick={showDrawer}>
              <Avatar>{companyName.slice(0, 1)}</Avatar>
            </div>
          ) : (
            <>
              <button>
                <a href="/">Sign In</a>
              </button>
              <div className="signin__button__mobile">
                <a href="/signin">
                  <HiOutlineLogin className="icon" />
                </a>
              </div>
            </>
          )}
        </div>

        {/* <div className="hamburger" onClick={handleClick}>
          {click ? (
            <HiOutlineX className="icon" />
          ) : (
            <HiMenu className="icon" />
          )}
        </div> */}
        <Drawer
          className="drawer"
          open={open}
          width={250}
          height={100}
          closable={false}
          onClose={onClose}
        >
          <div className="company_profile">
            <p className="profile_icon">
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              />
            </p>
            <h3>{companyName}</h3>
          </div>
          <div className="company_profile">
            <p className="profile_icon">
              <Avatar
                style={{
                  backgroundColor: "#ff0000",
                }}
                icon={<LogoutOutlined />}
              />
            </p>
            <a href="/">
              <Button onClick ={logout}type="primary">Log Out</Button>
            </a>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
