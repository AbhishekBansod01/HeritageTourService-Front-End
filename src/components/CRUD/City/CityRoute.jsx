
import { NavLink } from "react-router-dom";
import React from "react"
import './CityRoute.css'

const CityRoute = () => {
  return (

    <ul className="uldown2"  >
      <div className="nav" data-testid="CityRoutetest">
        <li> <NavLink to="/AddCity">Add City</NavLink></li>
      </div>
      <div className="nav">
        <li> <NavLink to="/UpdateCity">Update Data of City</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/DeleteCity">Delete City</NavLink></li>
      </div>
      <div className="nav">
        <li> <NavLink to="/GetCity">Get All Cities</NavLink></li>
      </div>
    </ul>
  )
}

export default CityRoute
