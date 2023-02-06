import React from 'react'
import './Navbar.css';
import Socials from './Socials';

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <div className='logo'>Jared Dye</div>
      <Socials />
    </div>
  )
}

export default Navbar