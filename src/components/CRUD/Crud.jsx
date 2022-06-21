
import { NavLink } from "react-router-dom";
import React from "react"
import './Crud.css'

const Crud = () => {
  return (
    <ul class="uldown">

      <div class="nav">
        <li> <NavLink to="/CityRoute">City</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/SiteRoute">Site</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/HotelRoute"><b>Hotel</b></NavLink></li>
      </div>
    </ul>

  )
}

export default Crud
