import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isLocationUrl = location.pathname !== "/";
  const [showBurger, setShowBurger] = useState(false);

  const handleToggleMenu = () => {
    setShowBurger(!showBurger);
  };

  const backgroundStyle = isLocationUrl ? "bg-sapin" : "bg-bg-marbre bg-black bg-opacity-50 bg-blend-overlay";

  return (
    <nav
      className={`flex items-center justify-between border-b-2 border-white ${backgroundStyle} bg-cover bg-top bg-no-repeat md:flex-col md:p-2`}
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
          className={`relative block w-10 h-1 bg-white rounded transition-all duration-500 content-[''] before:content-[''] before:absolute before:left-0 before:w-10 before:h-1 before:bg-white before:rounded before:transition-all before:duration-500 after:content-[''] after:absolute after:left-0 after:w-10 after:h-1 after:bg-white after:rounded after:transition-all after:duration-500 ${
            showBurger
              ? "before:rotate-45 before:translate-y-0 after:-rotate-45 after:translate-y-0 w-0 bg-inherit"
              : "before:-translate-y-3 after:translate-y-3"
          }`}
        ></span>
      </button>
      <ul
        className={`z-20 fixed top-0 right-0 flex flex-col items-center justify-center h-full w-full p-8 bg-black bg-opacity-90 transition-all duration-500 md:flex md:flex-row md:relative md:visible md:h-auto md:p-0 md:justify-evenly md:bg-transparent ${
          showBurger
            ? "right-0 visible"
            : "right-[-100vw] md:right-0 md:visible"
        }`}
      >
        <li className="mb-4 md:mb-0 md:mx-4">
          <Link to="/" className="text-white text-xl hover:text-gold-color">
            Accueil
          </Link>
        </li>
        <li className="mb-4 md:mb-0 md:mx-4">
          <a href="#NewsProjectsSection" className="text-white text-xl hover:text-gold-color">
            Nouveautés
          </a>
        </li>
        <li className="mb-4 md:mb-0 md:mx-4">
          <Link to="/ProjectsPage" className="text-white text-xl hover:text-gold-color">
            Réalisations
          </Link>
        </li>
        <li className="mb-4 md:mb-0 md:mx-4">
          <Link to="/" className="text-white text-xl hover:text-gold-color">
            À propos
          </Link>
        </li>
        <li className="md:mx-4">
          <Link to="/ContactPage" className="custom-link-button">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
