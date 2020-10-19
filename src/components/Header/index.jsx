import React from "react";

import logo from "../../assets/logo/logo-white-20@2x.png";

import "./index.scss";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src={logo} alt="" srcset="" />
      <div>
        <ul className="header_item-container">
          <li className="header_item">WHAT WE DO</li>
          <li className="header_item">HOW WE DO IT</li>
          <li className="header_item">ADDENDUM</li>
          <li className="header_item">WHY MAGICKOBO</li>
          <li className="header_item">OUR STORY</li>
          <li className="header_item">FAQ</li>
          <li className="header_item">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
