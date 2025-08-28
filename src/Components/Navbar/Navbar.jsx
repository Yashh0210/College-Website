import React,{useState,useEffect} from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    const[sticky,setSticky]=useState(false);
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY >50?setSticky(true):setSticky(false);
      })
    },[])


  return (
   <nav className={`container, ${sticky?'dark-nav':''}`}>
    <img src={logo} alt=""  className='logo'/>
    <ul>
        <li> <Link to="hero"  offset={50} duration={500} smooth={true} >  Home</Link> </li>
        <li><Link to="programs"  offset={-220} duration={500} smooth={true} >  Program</Link></li>
        <li><Link to="about "  offset={-190} duration={500} smooth={true} >  About us</Link></li>
        <li><Link to="campus"  offset={-190} duration={500} smooth={true} >  Campus</Link></li>
        <li><Link to="testimonials"  offset={-150} duration={500} smooth={true} > Testimonials</Link></li>
        <li><button className='btn'><Link to="contact"  offset={50} duration={500} smooth={true} > Contact us</Link></button></li>
    </ul>
   </nav>
  )
}

export default Navbar
