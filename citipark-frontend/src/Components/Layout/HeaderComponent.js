import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

 class HeaderComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
              <NavLink className ="navbar-brand" to="/dashboard">
                    <h1>Citipark</h1>
                  </NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
              
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/dashboard" >Home
                        </NavLink>
                        
                  </li>
                  <li>
                  <NavLink className="nav-link" to="/login">Login </NavLink>
                  
                  </li>
                  <li>
                  <NavLink className="nav-link" to="/signUp">Sign Up</NavLink>
                  
                  </li>
                  <li>
                  <NavLink className="nav-link" to="/dashboard">Logout</NavLink>
                  
                  </li>
                 
                  
                 
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}
export default HeaderComponent;