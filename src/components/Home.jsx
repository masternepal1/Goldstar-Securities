import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Assistance from "./Assistance";
import Footer from "./Footer";

const Home = ({ servicesRef }) => {
  return (
    <>
      <Hero />
      <div ref={servicesRef}>
        <Services />
      </div>
      <Assistance />
      <Footer />
    </>
  );
};

export default Home;
