//header.js module 
import React from 'react'

import { NavLink } from 'react-router-dom';

//create header component

function Header() {
  var MenuNames = ["Home", "About", "Services", "Itservices", "Contact","Myclass","Lifecycle","Restapi","RB","Signup"]
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light"
      style={
        {
          backgroundColor: '#475562',
          borderBottom: '0.5px white solid',
          borderTop: '0.5px white solid'
        }
      }>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarnav">
          <span className="navbar-toggler"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbar-nav">

          <ul className="navbar-nav">
            {
              MenuNames.map((data, i) =>
                <li className="nav-item px-1" key={i}>
                  <NavLink activeClassName="bg-dark" 
                  className="nav-link text-white" to={`/${data.toLowerCase()}`}>
                    {data}
                  </NavLink>
                </li>)
            }
          </ul>
          
        </div>
      </div>
    </nav>
  </>)
}
export default Header