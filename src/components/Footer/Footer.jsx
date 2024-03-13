import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/'
  return (
   <>
        <footer className={isHomePage ? 'homepage_footer otherPage_footer':'otherPage_footer'}>
            <div className="container">
                <h4>LUXURY RENDALS</h4>
                <p>Pinnet Infosolutions Private Limited </p>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/termsandconditions'}>Terms and Condition</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="container">
                <h4>Connect with us</h4>
                <p>0000</p>
                <p>2v@gmail.com</p>
                <p>All Rights Reserved by Pinnet Infosolutions Private Limited</p>
            </div>

        </footer>
   </>
  )
}

export default Footer