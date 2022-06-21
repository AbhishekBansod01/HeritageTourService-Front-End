
import { NavLink } from "react-router-dom";
import React from "react"
import './SiteRoute.css'

const SiteRoute = () => {
  return (
    <ul class="uldown2">
      <div class="nav">
        <li> <NavLink to="/AddSite">Add Site</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/UpdateSite">Update Data of Site</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/DeleteSite">Delete Site</NavLink></li>
      </div>
      <div class="nav">
        <li> <NavLink to="/GetSite">Get All Sites</NavLink></li>
      </div>
    </ul>

  )
}

export default SiteRoute
