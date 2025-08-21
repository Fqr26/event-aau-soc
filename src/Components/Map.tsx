// import React from "react";
import React, { useEffect } from "react";

interface MapProps {
  highlighted: boolean;
}

function Map({ highlighted }: MapProps) {
  useEffect(() => {
    // Check if URL has map hash on component mount
    if (window.location.hash === '#map') {
      const mapElement = document.getElementById('map');
      if (mapElement) {
        setTimeout(() => {
          mapElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <section id="map" className={`py-16 px-4 bg-gray-100 ${highlighted ? 'map-highlight' : ''}`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Event Location
        </h2>
        <div className="rounded-xl overflow-hidden shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2237.534418497814!2d38.74826122333927!3d9.01312184630793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c4825658a3%3A0xf3efdd57bb307c1e!2sAddis%20Ababa%20University%20School%20of%20Commerce!5e0!3m2!1sen!2set!4v1755773602341!5m2!1sen!2set" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Event Location at Addis Ababa University School of Commerce"
          ></iframe>
        </div>
        <div className="mt-6 text-center text-gray-600">
          <p className="text-lg font-semibold">Marketing in Practice 7th Edition</p>
          <p>Addis Ababa University School of Commerce</p>
          <p>Addis Ababa, Ethiopia</p>
        </div>
      </div>
    </section>
  );
}

export default Map;