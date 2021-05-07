import React from "react";
import { NavLink } from "react-router-dom";

import './Navigation.scss'

const Navigation = () => {
  return (
    <aside className="side-bar">
      <div className="spotifi-logo">
        <i id="logo" className="fab fa-spotify"></i>
        <span id="logo-text">Spotifi</span>
      </div>
      <div className="nav-links">
        <NavLink to="/" exact>
          <i className="fas fa-home"></i>
          <span>Home</span>
        </NavLink>
        <NavLink to="/search">
          <i className="fas fa-search"></i>
          <span>Search</span>
        </NavLink>
        <NavLink to="/favorites">
          <i className="fas fa-heart"></i>
          <span>Favorites</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Navigation;
