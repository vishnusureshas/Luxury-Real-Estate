import React from 'react'
import {RiFacebookBoxLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'


const Contacts = () => {
  return (
    <section id="contact">
        <h1>CONTACT US</h1>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
         <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
         <div className="container">
            <img src="/about.jng" alt="about"/>

            <div className="content">
                <h3>Let's Connect</h3>
                <div>
                    <p>Phone</p>
                    <span>001 002 003</span>
                </div>
                <div>
                    <p>Email</p>
                    <span>2k@gmail.com</span>
                </div>
                <div>
                    <p>Address</p>
                    <span>House Sector A-1</span>
                </div>
                <ul>
                    <Link to={'/'} target='_blank'><RiFacebookBoxLine/></Link>
                    <Link to={'/'} target='_blank'><RiFacebookBoxLine/></Link>
                    <Link to={'/'} target='_blank'><RiFacebookBoxLine/></Link>
                </ul>
            </div>
         </div>
    </section>
  )
}

export default Contacts