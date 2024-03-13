import React from 'react'
import HeroSection from '../SubComponents/HeroSection'
import ToVillas from '../SubComponents/ToVillas'
import Regions from '../SubComponents/Regions'
import OverSpecialities from '../SubComponents/OverSpecialities'
import Host from '../SubComponents/Host'
import About from '../SubComponents/About'
import Contact from '../SubComponents/Contact'

const Home = () => {
  return (
  <>
   <article className='page'>
      <HeroSection/>
      <ToVillas/>
      <Regions/>
      <OverSpecialities/>
      <Host/>
      <About/>
      <Contact/>
   </article>
  </>
  )
}

export default Home