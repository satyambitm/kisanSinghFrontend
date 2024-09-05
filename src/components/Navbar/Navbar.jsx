import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.jpg.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
            <li><button className='btn'>Login</button></li>
        </ul>
    </nav>
    
  )
}

export default Navbar