import React, { useState } from 'react'
import './navbar.scss';
import Lottie from 'react-lottie';
import animationData from './loop.json';

function  Navbar() {
    const [showlinks,setShowLinks]=useState(false);
    const defaultOptions={
        loop:true,
        autoplay:true,
        animationData: animationData,
    };
    
    return (
        <>
           <nav>
               <div className="burger" onClick={()=>setShowLinks(!showlinks)}>
                   {/* <div className="line"></div>
                   <div className="line"></div>
                   <div className="line"></div> */}
                   <Lottie
                   className="line"
                    options={defaultOptions}
                    height="100px"/>
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
