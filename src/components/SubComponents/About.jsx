import React from 'react'

const About = () => {
  return (
   <>
   <section id="aboutUs_Mini">
      <div className="first_container">
        <div className="content">
            <h1>ABOUT US</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>
        <button>We strive to offer you best possible homes to stay!</button>
      </div>

      <div className="second_container">
        <div className="image_1">
            <img src="/people.jpg" alt="people" />
        </div>
        <div className="image_2">
            <img src="/people2.jpg" alt="people2" />
        </div>
      </div>
   </section>
   </>
  )
}

export default About