import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import logo from './logo80_80.png';

const NavBar = () => (
  <nav className="navBar">
    <NavLink to="/Home">
      <img className="logo" src={logo} alt="Logo yaz frotozo" />
    </NavLink>
    <article className="linkContainer">
      <NavLink className="link" to="/Home">Home</NavLink>
      <NavLink className="link" to="/Home">Store</NavLink>
      <NavLink className="link" to="/Home">Sesion</NavLink>
      <NavLink className="link" to="/Home">Home</NavLink>
    </article>
  </nav>
);

export default NavBar;
