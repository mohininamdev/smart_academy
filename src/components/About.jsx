import React from 'react';
import StudentFace from '../assets/studentface.png';
import Services from './Services';
import ContactUs from "./ContactUs";

const About = () => {
  return (
    <div>
      <div className="mt-3 p-6 md:p-14 about-Container bg-gray-100 min-h-[760px]">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-7xl rounded-lg shadow-transparent p-6 md:p-12 flex flex-col md:flex-row items-center justify-between">
            
            {/* Left Section - Welcome */}
            <div className="sm:mt-4 text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-[36px] md:text-[50px] text-[#5676FF] leading-[45px] md:leading-[61px] font-bold w-auto md:w-[240px]">
                Welcome to Smart Academy
              </h1>
              <p className="font-sans text-[#363636] text-[16px] md:text-[20px] leading-none font-normal w-auto md:w-[310px] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor.
              </p>
            </div>

            {/* Center Section - Image with Pink Background */}
            <div className="relative w-[280px] md:w-[421px] h-[450px] md:h-[648px] bg-[#FF3C8A] rounded-tl-[140px] md:rounded-tl-[210.5px] rounded-tr-[140px] md:rounded-tr-[210.5px] rounded-bl-[50px] rounded-br-[50px] flex justify-center items-end overflow-hidden shadow-lg mb-6 md:mb-0">
              <img
                src={StudentFace}
                alt="Student"
                className="h-[380px] md:h-[548px] w-[240px] md:w-[357px] object-cover"
              />
            </div>

            {/* Right Section - Our Mission */}
            <div className="w-full md:w-[409px] text-center md:text-left px-4 md:pl-24">
              <h2 className="text-[32px] md:text-[42px] leading-none font-bold text-blue-600 w-auto md:w-[247px]">
                Our Mission
              </h2>
              <p className="w-auto md:w-[409px] text-[#363636] mt-4 text-[16px] md:text-[20px] font-normal leading-none font-sans">
                Lorem ipsum dolor sit amet, consectetur elit. Etiam condimentum leo sed nisi vehicula, fringilla ante tincidunt. Sed sit amet
              </p>

              {/* Stats Section */}
              <div className="flex flex-row justify-center md:justify-between mt-6  md:gap-3 w-full ">
                <div className="flex flex-col items-center w-[110px] h-[99px]">
                  <h3 className="text-[36px] font-medium text-[#5676FF] leading-[41px] font-ubuntu text-center">10+</h3>
                  <p className="text-[20px] font-normal text-[#363636] leading-[25px] font-mulish text-center">Years Experience</p>
                </div>
                <div className="flex flex-col items-center w-[110px] h-[99px]">
                  <h3 className="text-[36px] font-medium text-[#5676FF] leading-[41px] font-ubuntu text-center">29+</h3>
                  <p className="text-[20px] font-normal text-[#363636] leading-[25px] font-mulish text-center">Total Courses</p>
                </div>
                <div className="flex flex-col items-center w-[110px] h-[99px]">
                  <h3 className="text-[36px] font-medium text-[#5676FF] leading-[41px] font-ubuntu text-center">50K+</h3>
                  <p className="text-[20px] font-normal text-[#363636] leading-[25px] font-mulish text-center">Students Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <ContactUs />
    </div>
  );
};

export default About;




