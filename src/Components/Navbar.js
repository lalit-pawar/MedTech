import React, { useState, useEffect } from "react";
import "../App.css"
import '../CSS/Navbar.css'
import '../App.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <span className="logo">MedTech</span>
      <div className="container-fluid">
        <ul className="navbar-nav me">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/#/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#/Find Doctors">
              Find Doctors
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link  " aria-current="page" href="#/Patient">
              Patient
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#/Video Consult">
              Video Consult
            </a>
          </li>

          {/* <li className="nav-item">
          <a className="nav-link  active" aria-current="page"  href="/">Reels</a>
        
        </li> */}
        </ul>
        <div className="login">
        <button className="btn" type="submit">
            Login 
          </button>
          </div>
      
      </div>
    </nav>
  );
}
