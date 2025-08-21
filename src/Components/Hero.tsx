import React from "react";

interface HeroProps {
  scrollToMap: () => void;
}

function Hero({ scrollToMap }: HeroProps) {
  return (
    <div className='bg-[url("/hero-bg.png")] h-screen bg-cover bg-no-repeat bg-center margin-top: -56px; p-20 py-40'>
      <div className="flex flex-col col-span-2 items-center justify-center">
        <h1 className="mb-2 text-8xl font-bold text-center text-white">
          Marketing in practice 7th edition
        </h1>
        <p className="text-2xl font-medium text-center text-white py-5">
          "Bridging Theory, Practice, and Creativity in the New Age of Marketing"
        </p>
        <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start py-5">
          <button
            onClick={scrollToMap}
            className="block px-6 py-2 text-center text-white bg-blue-500 rounded-3xl hover:bg-blue-950"
          >
            Reserve Your Seat
          </button>
          <a
            href="#event"
            className="block px-6 py-2 text-center text-white bg-blue-500 rounded-3xl hover:bg-blue-950"
          >
            Our Event
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;