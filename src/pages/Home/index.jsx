import React from 'react'
import HeroMain from '../../components/hero/heroMain';
import Footer from "../../components/LayoutComponents/footer/footer";
import About from '../../components/About/About';
function index() {
  return (
    <div>
    <HeroMain/>
    <About/>
    {/* <Footer/> */}
    </div>
  )
}

export default index