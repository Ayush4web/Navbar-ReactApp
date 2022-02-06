import React from 'react'
import { FaBars } from 'react-icons/fa'
import logo from "./react.png"
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useState,useRef } from 'react'

const Navbar = () => {
  const [navbar,setNavbar] = useState(false)
  const refContainer = useRef(null)

  const handleNav =()=>{
     setNavbar(!navbar)
    
  }
  
  return (
    <>
      <div className="nav-container">
        <div className="nav-head">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="toggle" onClick={handleNav}>
            <FaBars />
          </div>
        </div>
        <div className={`${navbar?`links show`:`links`}`} ref={refContainer}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <di className="social">
          <ul className="social-links">
            <li>
              <a href="http://">
                <FaFacebook style={{ color: '#4267B2' }} />
              </a>
            </li>
            <li>
              <a href="http://">
                <FaTwitter style={{ color: '#00acee' }} />
              </a>
            </li>
            <li>
              <a href="http://">
                <FaLinkedin style={{ color: '#0e76a8' }} />
              </a>
            </li>
          </ul>
        </di>
      </div>
    </>
  )
}

export default Navbar
