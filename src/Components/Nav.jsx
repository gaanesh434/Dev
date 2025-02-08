// Nav.js
import React from "react";
import day from '../assets/day.jpg';
import blacklogo from '../assets/logo-black.png';
import night from '../assets/night.png';
import white from '../assets/logo-white.png';
import search from '../assets/search-b.png';
import searchw from '../assets/search-w.png';
import '../index.css';

const Nav = ({ theme, setTheme }) => {

  const toggle_mode = () => {
    console.log("toggle_mode called!"); // Confirm function is called
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log("Theme is now:", theme); // Check theme *after* setting it
  }

  return (
    <div className="navbar">
      <div>
        <img src={theme === 'light' ? white : blacklogo} alt="logo" className="logoo" />
      </div>
      <div className="list">
        <ul className="list-items">
          <li>Home</li>
          <li>Product</li>
          <li>Features</li>
          <li>About</li>
        </ul>
      </div>
      <div className="search-box">
        <img src={theme === 'light' ? search : searchw} className="search-icon" alt="img" />
        <input type="text" placeholder="Search..." />
      </div>
      <img onClick={toggle_mode} src={theme === 'light' ? night : day} className="dark" alt=".." />
    </div>
  );
}

export default Nav;
