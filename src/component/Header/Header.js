import axios from "axios";
import { React, useEffect, useState } from "react";
import { HiMenu, HiOutlineX, HiOutlineLogin } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);  
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
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li>
                <a href="/">Hardwares</a>
              </li>
              <li>
                <a href="/">Raw Material</a>
              </li>
              <li>
                <a href="/">Equipments</a>
              </li>
              <li>
                <a href="/">How we Work</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="signin__button">
          <button>
            <a href="/signin">Sign In</a>
          </button>
        </div>
        <div className="signin__button__mobile">
          <a href="/signin">
            <HiOutlineLogin className="icon" />
          </a>
        </div>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <HiOutlineX className="icon" />
          ) : (
            <HiMenu className="icon" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
