import React from 'react'
import About from '../SubComponents/About'

const AboutUs = () => {
  return (
    <>
    <section id="aboutPage" className='page'>
       <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
            <h3>Your peice of mind,our priority!</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
         <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          </div>
       </div>
       <About/>
    </section>
    </>
  )
}

export default AboutUs