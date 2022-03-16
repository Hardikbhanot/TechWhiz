import React from 'react';
import HeroContent from './heroContent';
import Hero from './hero';
import Navbar from '../LayoutComponents/Navbar/navbar';
function heroMain() {
  return (
    <div className='heroMain'>
      
       <HeroContent style={{color:"white", zIndex:"100"}}/> 
       <Hero style={{position: "fixed"}}/>
    </div>
  );
}

export default heroMain;
