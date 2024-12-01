// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-start justify-between p-4 text-white">
      <h1 className="text-2xl font-bold items-start">my portfolio</h1>
      
      {/* Hamburger Menu for Mobile */}
      <button 
        className="block md:hidden text-2xl justify-end" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul 
        className={`flex flex-col md:flex-row md:space-x-4 gap-2 absolute md:static w-full md:w-auto md:bg-none  ${isMenuOpen ? 'top-14 right-10 items-end p-4 rounded-lg' : '-top-full'}`}
      >
        <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
          <Link to="/projects">Projects</Link>
        </li>
        {/* <li className="hover:text-yellow-400 transition duration-200 ease-in-out">
          <Link to="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
