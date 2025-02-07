import React from "react";
import day from '../assets/day.jpg';
import blacklogo from '../assets/logo-black.png';
import night from '../assets/night.png';
import white from '../assets/logo-white.png';
import search from '../assets/search-b.png';
import searchw from '../assets/search-w.png';
import '../index.css';

const Nav = () => {
  return (
    <div className="navbar">

      <div>
        <img src={blacklogo} alt="logo" className="logoo" />
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
        <img src={search} alt="" />
        <input type="text" placeholder="Search..." />
      </div>

      <img src={night} alt=".." />
    </div>
  )
}

export default Nav;