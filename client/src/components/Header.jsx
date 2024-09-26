import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='flex flex-col justify-center items-center gap-2 bg-bg-dark-color border-b-2'>
      <Link to="/" className='text-logo-color text-6xl font-logo-font'>Toutain Décor</Link>
      <ul className='flex justify-evenly w-full mb-4 items-center'>
        <Link to="/" className='text-white'>Accueil</Link>
        <a href="#NewsProjectsSection" className='text-white'>Nouveautés</a>
        <Link to="/ProjectsPage" className='text-white'>Réalisations</Link>
        <Link to="" className='text-white'>À propos</Link>
        <Link to="/ContactPage" id='linkButton' className='text-white'>Contact</Link>
      </ul>
    </nav>
  )
}

export default Header