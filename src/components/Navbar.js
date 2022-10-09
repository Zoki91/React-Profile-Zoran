import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/About'>About Me</Link>
      <Link to='/Projects'>Projects</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/Resume'>Resume</Link>
    </nav>

  );
}

export default Navbar;