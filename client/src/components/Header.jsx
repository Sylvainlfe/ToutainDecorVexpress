import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='flex flex-col justify-center items-center gap-2 absolute top-0 left-0 right-0 z-10 bg-transparent border-b-2'>
      <h1 className='text-logo-color text-6xl'>Toutain Décor</h1>
      <ul className='flex justify-evenly w-full mb-4 items-center'>
        <Link to="/" className='text-white'>Accueil</Link>
        <Link to="/ProjectsPage" className='text-white'>Réalisations</Link>
        <Link to="" className='text-white'>À propos</Link>
        <button type='button' className='text-white'>Contact</button>
      </ul>
    </nav>
  )
}

export default Header