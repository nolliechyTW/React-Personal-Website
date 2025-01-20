import React from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Get in Touch</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;