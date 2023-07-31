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
            <div className="after__signin">
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
      </div>
    </header>
  );
};

export default Header;
