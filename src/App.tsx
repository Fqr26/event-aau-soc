import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import ProgressBar from "./Components/ProgressBar";
import Approach from "./Components/Approach";
import Footer from "./Components/Footer";
import Features from "./Components/Features";
import Contact from "./Components/Contact";
import Map from "./Components/Map";

function App() {
  const [mapHighlighted, setMapHighlighted] = useState(false);

  const scrollToMap = () => {
    const mapElement = document.getElementById('map');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth' });
      
      // Highlight the map
      setMapHighlighted(true);
      
      // Remove highlight after animation completes
      setTimeout(() => {
        setMapHighlighted(false);
      }, 2000);
      
      // Update URL with hash
      window.history.pushState(null, '', '#map');
    }
  };

  return (
    <>
      <Header />
      <Hero scrollToMap={scrollToMap} />
      <About />
      <Services />
      <Approach />
      <Features />
      <Contact />
      <Map highlighted={mapHighlighted} />
      <ProgressBar />
      <Footer />
    </>
  );
}

export default App;