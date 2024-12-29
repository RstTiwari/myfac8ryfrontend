import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Header/Header.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { WhatsApp } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  let navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="main-nav">
        {/* Logo Section */}
        <div className="logo" onClick={() => navigate("/")}>
          MyFac8ry <br />
        </div>
        <div className="call_email_icon">
          <div
            className="call"
            onClick={() => (window.location.href = "tel:+8767948130")} // Replace with your desired phone number
          >
            <PhoneEnabledIcon />
          </div>
          <div
            className="email"
            onClick={
              () => window.open("https://wa.me/918767948130", "_blank") // WhatsApp Web link
            }
          >
            <WhatsApp />
          </div>
          {/* Toggle Button */}
          <div className="icon" onClick={toggleMenu}>
            <DehazeIcon />
          </div>
        </div>

        {/* Nav Links */}
        <ul className={menuOpen ? "true show" : "navlink"}>
          <div className="clear" onClick={toggleMenu}>
            <ClearIcon />
          </div>
          {/* Product Dropdown */}
          <li className="li product">
            <Link to="/" className="li">
              Product
            </Link>
            {/* Dropdown content for Product */}
            <div className="dropdown-content">
              <ul>
                <li>FTMS - Fact8ry Team Management System</li>
                <li>FIMS - Fac8ry Inventory Management System</li>
                <li>FAMS - Fac8ry Account Management System</li>
              </ul>
            </div>
          </li>

          {/* Process Dropdown */}
          <li className="li process">
            Process
            {/* Dropdown content for Process */}
            <div className="dropdown-content">
              <ul>
                <li>CNC -Machining</li>
                <li>Laser Cutting</li>
                <li>CNC -Bending</li>
                <li>Welding</li>
                <li>Coating</li>
                <li>Custom Manufacturing</li>
              </ul>
            </div>
          </li>

          <Link to={"/contact"} className="li">
            <li className="li">Contact Us</li>
          </Link>
          <li className="li">
            <Button
              className="Header_buttons"
              style={{ padding: "20px", color: "black" }}
              onClick={() =>
                (window.location.href = "https://ftms.myfac8ry.com/")
              }
            >
              Get Quote
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
