import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const location = useLocation()
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
                <a href="/customerarea">Coustmer Area</a>
              </li>
              <li>
                <a href="/signin">Sign In</a>
              </li>

            </ul>
          </div>
        </div>
        {location.pathname === "/customerarea" ? (
          <>
          </>
        ) : (
          <></>
        )}

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
