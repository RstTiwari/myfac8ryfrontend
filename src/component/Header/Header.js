import { React, useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <header>
      <div className="navbar">
        <div className="container__logo">
          <span>My</span>
          Fac8ry
        </div>
        <div className="container">
          <div className="navmenu__item">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li>
                <a>Capabilities</a>
              </li>
              <li>
                <a>Resources</a>
              </li>
              <li>
                <a>Become Manufacturing Partner</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="signin__button">
          <div className="">
            <a>
              <button>Sign In </button>
            </a>
          </div>
        </div>
        <div className="getQuote__btn">
          <button className="btn">Get a Quote</button>
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
