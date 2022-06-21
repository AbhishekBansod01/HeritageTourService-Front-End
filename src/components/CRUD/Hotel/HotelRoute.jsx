
import { NavLink } from "react-router-dom";
import React from "react"
import './HotelRoute.css'

const HotelRoute = () => {
  return (

    <ul class="uldown2">

      <div class="nav">
        <li> <NavLink to="/AddHotel">Add Hotel</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/UpdateHotel">Update Data of Hotel</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/DeleteHotel">Delete Hotel</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/GetHotel">Get All Hotels</NavLink></li>
      </div>
    </ul>

  )
}

export default HotelRoute
