import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logoImage from '../assets/solovwhite.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains('menu-toggle')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); // Toggle isOpen
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
       <div className="header-image">
      <img src={logoImage} alt="logo" className="logo-header"/>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
      </div>
      {isOpen && (
        <ul className="menu-items"     style={{
          display: isOpen ? 'block' : 'none',
          position: 'absolute',
          top: '50px',
          left: 0,
          width: '100%',
          backgroundColor: '#333',
        }} ref={menuRef}>
          <li className='background-nav-container'><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li className='background-nav-container'>
        <span className='menu-span'>Videos</span>
        <ul className="dropdown-menu">
          <li><Link to="/videos/music" onClick={closeMenu}>Music Videos</Link></li>
          <li><Link to="/videos/events" onClick={closeMenu}>Events</Link></li>
          <li><Link to="/videos/lifestyle" onClick={closeMenu}>Lifestyle</Link></li>
          <li><Link to="/videos/commercials" onClick={closeMenu}>Commercials</Link></li>
        </ul>
      </li>
          <li className='background-nav-container'><Link to="/photos" onClick={closeMenu}>Photos</Link></li>
          <li className='background-nav-container'><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li className='background-nav-container'><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      )}
     
      <ul className="desktop-menu">
        <li><Link to="/">Home</Link></li>
        <li>
        <span>Videos
        <ul className="dropdown-menu">
        <li><Link to="/videos/music">Music Videos</Link></li>
        <li><Link to="/videos/events">Events</Link></li>
        <li><Link to="/videos/lifestyle">Lifestyle</Link></li>
        <li><Link to="/videos/commercials">Commercials</Link></li>
        </ul>
        </span>
        
      </li>
        <li><Link to="/photos">Photos</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
