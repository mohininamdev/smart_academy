import React from "react";
import { Link } from "react-router-dom";
import Back from '../assets/back.jpg';
import Header from "./Header";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div>
    <div className="relative w-full min-h-screen flex flex-col ">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${Back})` }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E] to-[#1E1E1E]/50"></div>
      </div>

      {/* Content Section */}
      <Header />
      <div className="relative flex flex-col justify-center items-start px-4 sm:px-10 max-w-[990px] w-full text-white min-h-screen">
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold font-sans leading-tight">
          Achieve your future <br /> With Smart <br /> Academy
        </h2>
        <p className="text-base sm:text-lg md:text-xl w-full sm:w-[770px] mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique sem ut lacinia pellentesque. Donec in nulla faucibus, tincidunt velit vel, ultricies dolor.
        </p>
        
        {/* Button */}
        <div className="mt-6 sm:flex">
          <Link 
            to="/explorecourse" 
            className="block w-[208px] text-center bg-[#FF3C8A] hover:bg-pink-600 text-white text-lg font-medium py-3 rounded-full transition"
          >
            Explore Course
          </Link>
        </div>
      </div>
      
    </div>
    <ContactUs/>
    </div>
  );
}

export default Home;
