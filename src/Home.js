import React from 'react'
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import IndustrialCard from "./component/IndustrialCards/IndustrialCard";
import Turbocharge from "./component/Turbocharge/Turbocharge";
import Footer from './component/Footer/Footer';
import Orderprocess from './component/Orderprocess/Orderprocess';

const Home = () => {
  return (
    <div>
      <>
        <Header />
        <Hero />
        <IndustrialCard />
        <Turbocharge />

        <Footer />
      </>
    </div>
  );
}

export default Home
