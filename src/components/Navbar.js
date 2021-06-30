import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <Link className="title" to="/">
        <h1>Math Magician</h1>
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </div>
    </nav>
  </header>
);

export default Navbar;
