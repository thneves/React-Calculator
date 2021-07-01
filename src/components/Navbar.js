import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <header>
    <nav className="nav">
      <Link
        to="/"
        className="title"
      >
        Math Magicians!
      </Link>
      <div className="links">
        <Link to="/" className="link">Home</Link>
        <Link to="/calculator" className="link">Calculator</Link>
        <Link to="/quote" className="link">Quote</Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
