// Navbar.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import navstyles from './navbar.module.scss';
import logo from 'assets/images/xombus-logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={navstyles["navbar"]}>
      <div className={navstyles["navbar-container"]}>
        <div className={navstyles["navbar-logo"]}>
          <img src={logo} alt="" />
        </div>

        {/* Hamburger/Close menu icon */}
        <div className={navstyles["navbar-hamburger"]} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <div className={`${navstyles["navbar-menu"]} ${isOpen ? navstyles["active"] : ""}`}>
          <ul className={navstyles["navbar-links"]}>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
          <div className={navstyles["navbar-buttons"]}>
            <button className={navstyles["signup-btn"]}>Sign Up</button>
            <button className={navstyles["login-btn"]}>Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;