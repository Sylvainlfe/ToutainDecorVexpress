import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [showBurger, setShowBurger] = useState(false);

  const handleToggleMenu = () => {
    setShowBurger(!showBurger);
  };

  return (
    <nav
      className="flex items-center justify-between border-b-2 border-gold-500 bg-[#0f1011] md:flex-col md:p-2"
    >
      <Link
        to="/"
        className="text-logo-color text-6xl font-logo-font pl-4 pt-2 md:p-0"
      >
        Toutain Décor
      </Link>
      <button
        className={`w-12 h-12 top-4 right-4 z-30 md:hidden`}
        onClick={handleToggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`relative block w-10 h-1 bg-gold-500 rounded transition-all duration-500 content-[''] before:content-[''] before:absolute before:left-0 before:w-10 before:h-1 before:bg-gold-500 before:rounded before:transition-all before:duration-500 after:content-[''] after:absolute after:left-0 after:w-10 after:h-1 after:bg-gold-500 after:rounded after:transition-all after:duration-500 ${
            showBurger
              ? "before:rotate-45 before:translate-y-0 after:-rotate-45 after:translate-y-0 w-0 bg-inherit"
              : "before:-translate-y-3 after:translate-y-3"
          }`}
        ></span>
      </button>
      <ul
        className={`z-20 fixed top-0 right-0 flex flex-col items-center justify-center h-full w-full bg-black bg-opacity-90 transition-all duration-500 md:flex md:flex-row md:relative md:visible md:h-auto md:p-0 md:justify-evenly md:bg-transparent ${
          showBurger
            ? "right-0 visible"
            : "right-[-100vw] md:right-0 md:visible"
        }`}
      >
        <li className="mb-4 md:mb-0 md:mx-4">
          <Link to="/" onClick={handleToggleMenu} className="text-white text-xl border-l-2 lg:pl-2 border-transparent hover:text-gold-500 lg:hover:border-l-2 lg:hover:pl-2 hover:duration-300 hover:border-gold-500">
            Accueil
          </Link>
        </li>
        <li className="mb-4 md:mb-0 md:mx-4">
          <Link to="/#NewsProjectsSection" onClick={handleToggleMenu} className="text-white text-xl border-l-2 lg:pl-2 border-transparent hover:text-gold-500 lg:hover:border-l-2 lg:hover:pl-2 hover:duration-300 hover:border-gold-500">
            Nouveautés
          </Link>
        </li>
        <li className="mb-4 md:mb-0 md:mx-4">
          <Link to="/ProjectsPage" onClick={handleToggleMenu} className="text-white text-xl border-l-2 lg:pl-2 border-transparent hover:text-gold-500 lg:hover:border-l-2 lg:hover:pl-2 hover:duration-300 hover:border-gold-500">
            Réalisations
          </Link>
        </li>
        <li className="mb-4 md:mb-0 md:mx-4">
          <Link to="/about" onClick={handleToggleMenu} className="text-white text-xl border-l-2 lg:pl-2 border-transparent hover:text-gold-500 lg:hover:border-l-2 lg:hover:pl-2 hover:duration-300 hover:border-gold-500">
            À propos
          </Link>
        </li>
        <li className="mb-4 md:mb-0 md:mx-4">
          <Link to="/ContactPage" onClick={handleToggleMenu} className="flex justify-center items-center border-2 border-transparent text-xl font-bold w-32 py-2 text-[#0f1011] bg-gold-500 backdrop-blur-sm rounded-full hover:bg-transparent hover:text-gold-500 hover:border-gold-500 hover:border-2 hover:duration-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
