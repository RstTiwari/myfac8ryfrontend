import { React, useEffect, useState } from "react";
import {
  HiMenu,
  HiOutlineX,
  HiOutlineLogin,
  HiOutlineUserCircle,
} from "react-icons/hi";
import "./Header.css";
import isAuthenticated from "../../Helper/auth";
const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); 
  const [companyName , setCompanyName]  = useState()
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
            <div className="after__signin">
              {companyName.slice(0,4)}
              <HiOutlineUserCircle className="icon" />
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

        {/* <div className="hamburger" onClick={handleClick}>
          {click ? (
            <HiOutlineX className="icon" />
          ) : (
            <HiMenu className="icon" />
          )}
        </div> */}
      </div>
    </header>
  );
};

export default Header;
