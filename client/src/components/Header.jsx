import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();
  const isLocationUrl = location.pathname === '/ContactPage';

  // const headerStyle = isLocationUrl ? 'text-black' : 'text-white';
  // const buttonStyle = isLocationUrl ? 'border-black text-black before:bg-black' : 'border-white text-white before:bg-white';
  const backgroundStyle = isLocationUrl ? 'bg-marbre-gris' : 'bg-bg-marbre';

  return (
    <nav className={`flex flex-col justify-center items-center gap-2 border-b-2 border-white ${backgroundStyle} bg-cover bg-top bg-no-repeat bg-black bg-opacity-50 bg-blend-overlay`}>
      <Link to="/" className='text-logo-color text-6xl font-logo-font'>Toutain Décor</Link>
      <ul className='flex justify-evenly w-full mb-4 items-center'>
        <Link to="/" className="text-white">Accueil</Link>
        <a href="#NewsProjectsSection" className="text-white">Nouveautés</a>
        <Link to="/ProjectsPage" className="text-white">Réalisations</Link>
        <Link to="" className="text-white">À propos</Link>
        <Link to="/ContactPage" className="custom-link-button">Contact</Link>
      </ul>
    </nav>
  )
}

export default Header