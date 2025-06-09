import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiBehance, SiDribbble } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="  bg-blue-500 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">Smart Academy</h2>
          <p className="w-[419px] h-[72px] mt-4 l-[70px] text-left text-sm">
          Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Vivamus venenatis 
          dolor vel <br/>lacus laoreet tristique. Nunc bibendum justo.
          </p>
          <div className="flex items-center gap-4 mt-4 text-2xl">
          <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
            <SiBehance className="w-[26.65px] h-[26.65px] hover:opacity-80 transition"/>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <SiDribbble className="w-[26.65px] h-[26.65px] hover:opacity-80 transition"/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-[26.65px] h-[26.65px] hover:opacity-80 transition"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-[26.65px] h-[26.65px] hover:opacity-80 transition"/>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-[26.65px] h-[26.65px] hover:opacity-80 transition"/>
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg w-[149px] text-left font-semibold">Quick Links</h3>
          <ul className="mt-4 w-[149px] text-left  space-y-2 text-sm">
            <li>Course</li>
            <li>Our Service</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg w-52 text-left font-semibold">Course</h3>
          <ul className="mt-4 w-52 text-left space-y-2 text-sm">
            <li>Music Course</li>
            <li>Art And Craft Course</li>
            <li>Aerobic Course</li>
            <li>Science Course</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
