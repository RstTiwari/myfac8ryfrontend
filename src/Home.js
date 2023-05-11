import React from 'react'
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import IndustrialCard from "./component/IndustrialCards/IndustrialCard";
import Turbocharge from "./component/Turbocharge/Turbocharge";
// import Footer from './component/Footer/Footer';
import Homedisplay from "./component/homedispaly/Homedisplay.js"

const Home = () => {
  return (
    <div>
      <>
        <Header />
        <Hero />
        <Homedisplay />
        <Turbocharge />
      </>
    </div>
  );
}

export default Home
