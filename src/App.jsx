import React, { useRef } from "react"; // Import useRef here
import Headerbar from "./components/Headerbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Assistance from "./components/Assistance";
import Footer from "./components/Footer";

function App() {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Headerbar />
        <Header scrollToServices={scrollToServices} />
        <Hero />
        <div ref={servicesRef}>
          <Services />
        </div>
        <Assistance />
        <Footer />
      </div>
    </>
  );
}

export default App;
