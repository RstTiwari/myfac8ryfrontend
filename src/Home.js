import React from 'react'
import Header from "./component/Header/Header";
import  "./index.css"
import Hero from "./component/Hero/Hero";
import IndustrialCard from "./component/IndustrialCards/IndustrialCard";
import Turbocharge from "./component/Turbocharge/Turbocharge";
import Footer from './component/Footer/Footer';
import Orderprocess from './component/Orderprocess/Orderprocess';
import Wtsplogo from "./Assets/myfac8ryWtsp.svg"

const Home = () => {
  return (
    <div>
      <>
        <Header />
        <Hero />

        <div className="wtsp__img">
          <a href="https://wa.me/+918767948130">
            <img className="wtsp__img__icon" alt="wtsp" src={Wtsplogo} />
          </a>
        </div>

        <IndustrialCard />
        <Turbocharge />
        <Footer />
      </>
    </div>
  );
}

export default Home
