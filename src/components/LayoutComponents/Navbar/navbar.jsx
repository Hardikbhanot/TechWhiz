import React, { useState } from 'react'
import './navbar.scss';
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
               <ul id={showlinks ? "show": ""}>
                   <li>Home</li>
                   <li>About</li>
                   <li>Geek Feed</li>
                   <li>Clubs</li>
                   <li>Team</li>
                   <li>Signup and Login</li>
               </ul>
            </nav> 
        </>
    )
}

export default Navbar
