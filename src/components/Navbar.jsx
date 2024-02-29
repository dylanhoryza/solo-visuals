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
          <li className='background-nav-container'><Link to="/profile" onClick={closeMenu}>Videos</Link></li>
          <li className='background-nav-container'><Link to="/blog" onClick={closeMenu}>Photos</Link></li>
          <li className='background-nav-container'><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li className='background-nav-container'><Link to="/news" onClick={closeMenu}>Contact</Link></li>
        </ul>
      )}
     
      <ul className="desktop-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Videos</Link></li>
        <li><Link to="/blog">Photos</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/news">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
