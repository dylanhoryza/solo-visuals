import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

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
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
      </div>
      {isOpen && (
        <ul className="menu-items" ref={menuRef}>
          <li className='background-nav-container'><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li className='background-nav-container'><Link to="/profile" onClick={closeMenu}>Videos</Link></li>
          <li className='background-nav-container'><Link to="/blog" onClick={closeMenu}>Photos</Link></li>
          <li className='background-nav-container'><Link to="/news" onClick={closeMenu}>Contact</Link></li>
         
        </ul>
      )}
    
    </nav>
  );
};

export default Navbar;