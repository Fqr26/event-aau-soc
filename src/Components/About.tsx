// import React from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

function About() {
  return (
    <div className="mt-12 px-10 text-center flex flex-col items-center border-b-[1px] shadow-lg">
      <h1 className="text-[40px] py-10 font-bold">ABOUT THE EVENT</h1>
      <BiSolidQuoteAltLeft className="bg-black-500 p-3 py-1 text-[44px] rounded-full mt-1 text-white" />
      <h2 className="my-5 text-gray-400 text-[25px] text-center px-10 mr-10">
        
        The marketing industry is evolving rapidly with the rise of digital platforms, data analytics, artificial intelligence, 
        and sustainable consumer practices. For marketing students, keeping up with these trends is essential to remain competitive in the job market.!
      </h2>
      <BiSolidQuoteAltRight className="bg-black-500 p-3 text-[44px] rounded-full mt-6 text-white" />

      <div>
        <div className="flex flex-row items-end justify-end py-3">
          <img
            src="/hero-img.svg"
            alt="hero 2"
            style={{ width: "300px", height: "200px" }}
          />
          <p className="text-black-900 py-0 text-[20px] px-10 mr-10">
            This event will bring together industry professionals, academics, and students for a day of knowledge sharing and creativity. 
            It will feature a seminar with expert talks, a panel discussion for deeper engagement, an exhibition showcasing innovative marketing ideas, 
            and a networking session for building professional connections.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
