import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
    <li>
      <Link to="/">Simulate</Link>
    </li>
    <li>
      <Link to="/about-us">About Us</Link>
    </li>
    <li>
      <Link to="/how-its-work">How Its Work</Link>
    </li>
  </div>
  )
}

export default Navbar;