import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Sites from "./components/Sites"
import Home from "./components/Home/Home"
import Register from './components/Register'

import CityRoute from "./components/CRUD/City/CityRoute"
import AddCity from './components/CRUD/City/AddCity'
import UpdateCity from './components/CRUD/City/UpdateCity'
import DeleteCity from './components/CRUD/City/DeleteCity'
import GetCity from './components/CRUD/City/GetCity'

import HotelRoute from "./components/CRUD/Hotel/HotelRoute"
import AddHotel from './components/CRUD/Hotel/AddHotel'
import DeleteHotel from './components/CRUD/Hotel/DeleteHotel'
import UpdateHotel from './components/CRUD/Hotel/UpdateHotel'
import GetHotel from './components/CRUD/Hotel/GetHotel'

import SiteRoute from "./components/CRUD/Site/SiteRoute"
import AddSite from './components/CRUD/Site/AddSite'
import DeleteSite from './components/CRUD/Site/DeleteSite'
import UpdateSite from './components/CRUD/Site/UpdateSite'
import GetSite from './components/CRUD/Site/GetSite'

import Login from "./components/Login"
import Logout from "./components/Logout"
import Crud from './components/CRUD/Crud'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="div98" >

      <Router>
        <br /><br /><br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/sites" element={<Sites />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/Logout" element={<Logout />} />
          <Route exact path="/crud" element={<Crud />} />

          <Route exact path="/CityRoute" element={<CityRoute />} />
          <Route exact path="/AddCity" element={<AddCity />} />
          <Route exact path="/UpdateCity" element={<UpdateCity />} />
          <Route exact path="/DeleteCity" element={<DeleteCity />} />
          <Route exact path="/GetCity" element={<GetCity />} />

          <Route exact path="/HotelRoute" element={<HotelRoute />} />
          <Route exact path="/AddHotel" element={<AddHotel />} />
          <Route exact path="/DeleteHotel" element={<DeleteHotel />} />
          <Route exact path="/UpdateHotel" element={<UpdateHotel />} />
          <Route exact path="/GetHotel" element={<GetHotel />} />

          <Route exact path="/SiteRoute" element={<SiteRoute />} />
          <Route exact path="/AddSite" element={<AddSite />} />
          <Route exact path="/DeleteSite" element={<DeleteSite />} />
          <Route exact path="/UpdateSite" element={<UpdateSite />} />
          <Route exact path="/GetSite" element={<GetSite />} />

        </Routes>
        <Navbar />
      </Router>
      <Header />
      <Footer />
      <div>
        <lform />
      </div>
    </div>

  )
}


export default App;
