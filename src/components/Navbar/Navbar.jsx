import { NavLink } from "react-router-dom";
import React from "react"
import './Navbar.css'


function Navbar() {
  return (
    <div class='center12'>
      <ul >
        <div class="nav">
          <li><NavLink to="/">Home</NavLink></li>
        </div>
        <div class="nav">
          <li> <NavLink to="/Sites">Famous Heritage Sites</NavLink></li>
        </div>
        <div class="nav">
          <li> <NavLink to="/Register">Register</NavLink></li>
        </div>
        <div class="nav">
          <li> <NavLink to="/Login">Login</NavLink></li>
        </div>
        <div class="nav">
          <li><NavLink to="/Crud">Crud</NavLink></li>
        </div>
        <div class="nav">
          <li><NavLink to="/Logout">Logout</NavLink></li>
        </div>
        <div class="nav">
          <li> <NavLink to="/Contact">Contact</NavLink></li>
        </div>
        <div class="nav">
          <li><NavLink to="/About">About</NavLink></li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar;

