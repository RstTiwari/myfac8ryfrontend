import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Put your PROJECT into production today
        </p>
        <div className="hero__landing__logo">
          <a href="https://wa.me/+918928772801" className="instant__quote__button">
            GET YOUR PROJECT IDEA
          </a>
        </div>

        <div class="footer-link-items">
            <a href="https://instagram.com/_merakiinnovation?utm_source=qr&igshid=OGU0MmVlOWVjOQ">Instagram</a>
            <a href="https://youtube.com/@_Merakiinnovation?si=5Ahsky40Is7NW85V">Youtube</a>
            <a href="https://www.facebook.com/profile.php?id=100093102007531&mibextid=ZbWKwL">Facebook</a>
          </div>      </section>
      </div>

  );
}

export default Footer;
