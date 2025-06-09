import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons for menu toggle

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 md:w-full w-screen bg-slate-500 shadow-md z-50">
      <div className="flex justify-between items-center px-4 sm:px-10 lg:px-20 h-16">

        

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-white text-lg font-medium capitalize">
            Home
          </Link>
          <Link to="/about" className="text-white text-lg font-medium capitalize">
            About
          </Link>
          <Link to="/course" className="text-white text-lg font-medium capitalize">
            Course
          </Link>
        </nav>
        {/* Logo */}
        <h1 className="text-white text-2xl sm:text-3xl font-bold font-sans">
          Smart Academy
        </h1>

        {/* Explore Button (Desktop) */}
        <div className="hidden md:flex">
          <Link
            to="/explorecourse"
            className="bg-[#FF3C8A] hover:bg-pink-600 text-white text-lg font-medium px-6 py-3 rounded-full transition"
          >
            Explore Course
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-600 py-4 px-6 w-full sm:max-w-fit absolute top-20 left-0">
          <Link to="/" className="block text-white text-lg py-2"onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block text-white text-lg py-2">About</Link>
          <Link to="/course" className="block text-white text-lg py-2">Course</Link>
          <Link
            to="/explorecourse"
            className="block bg-[#FF3C8A] hover:bg-pink-600 text-white text-lg font-medium text-center py-3 rounded-full mt-4"
          >
            Explore Course
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
