import React, { useState } from 'react'
import './navbar.scss';
import {
    BrowserRouter as Router,
    Link
    // Route
  } from "react-router-dom";
function  Navbar() {
    const [showlinks,setShowLinks]=useState(false);
    
    
    return (
        <>
           <nav>
               <div className="burger" onClick={()=>setShowLinks(!showlinks)}>
                   <div className="line"></div>
                   <div className="line"></div>
                   <div className="line"></div>
               </div>
               <Router>
               <ul id={showlinks ? "show": ""}>
                <Link to="/"  onClick={() => {window.location.href="/"}}>   <li>Home</li></Link>
                  <Link to="/about"  onClick={() => {window.location.href="/about"}}> <li>About</li></Link>
                  <Link to="/"  onClick={() => {window.location.href="/geekfeed"}}>  <li>Geek Feed</li> </Link>
                  <Link to="/club"  onClick={() => {window.location.href="/club"}}> <li>Clubs</li></Link>
                  <Link to="/team"  onClick={() => {window.location.href="/team"}}> <li>Team</li></Link>
                  <Link to="/"  onClick={() => {window.location.href="/"}}>  <li>Signup and Login</li> </Link>
               </ul>
               </Router>
            </nav> 
        </>
    )
}

export default Navbar
