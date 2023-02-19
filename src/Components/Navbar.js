import React, { useState, useEffect } from "react";
import "../App.css"
import '../CSS/Navbar.css'
import '../App.css'

export default function Navbar() {

  const [isWalletInstalled, setIsWalletInstalled] = useState(false)
  const [account, setAccount] = useState(null)
  const [isWalletConnect,setIsWalletConnect] = useState("Connect")

  const connectToMeta = async() => {

    if(window.ethereum){

      window.ethereum.request( {method: "eth_requestAccounts"})
      .then((accounts) => {
        setAccount(accounts[0]);
        setIsWalletConnect("Connected")
      }).catch( (e) => {
        alert(e)
      })
    }

    else{
      window.alert("Please Install Metamask!")
    }

  }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <span className="logo">MedTech</span>
      <div className="container-fluid">
        <ul className="navbar-nav me">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/#/">
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

          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#/GetDetails">
              GetDetails
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#/WhitelistDoctor">
            WhitelistDoctor
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="#/Insurence">
              Insurence
            </a>
          </li>

          <li className="nav-item">
          <div className="login">
        <button className="btn" onClick={connectToMeta} >
            {isWalletConnect} 
          </button>
          </div>
          </li>

       
        </ul>
       
      
      </div>
    </nav>
  );
}
