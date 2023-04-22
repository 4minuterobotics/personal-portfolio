import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo2 from '../assets/img/logo.svg';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
 






  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    
   
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    console.log('going to page section ', value)
  }
  return (
    <Router>
  <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
<Container>
  <Navbar.Brand href="/">
    <img src={logo} alt="Logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav">
    <span className="navbar-toggler-icon"></span>
  </Navbar.Toggle>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
      <Nav.Link href="#technologies" className={activeLink === 'technologies' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('technologies')}>Technologies</Nav.Link>
      <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
      <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Experience</Nav.Link>
    </Nav>
    <span className="navbar-text">
      <div className="social-icon">
        <a href="https://linkedin.com/in/william-lawrence-196511156/"><img src={navIcon1} alt="" /></a>
        {/* <a href="#"><img src={navIcon2} alt="" /></a>
        <a href="#"><img src={navIcon3} alt="" /></a> */}
      </div>
      <HashLink to='#connect'>
        <button className="vvd"><span>Let’s Connect</span></button>
      </HashLink>
    </span>
  </Navbar.Collapse>
</Container>
</Navbar>
    </Router> 
  )


//........ fucked up offcanvas version
// {/* <Navbar key={expand}  expand={expand} className={scrolled ? "scrolled" : "mb-3"} >
// <Container fluid>
// <Navbar.Brand href="/"> <img src={logo} alt="Logo" /> </Navbar.Brand>
//   <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//   <Navbar.Offcanvas 
//     id={`offcanvasNavbar-expand-${expand}`}
//     aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//     placement="end"
    
//   >
//     <Offcanvas.Header closeButton>
//       <Offcanvas.Title className= "canvas-menu-title" id={`offcanvasNavbarLabel-expand-${expand}`}>
//         Menu
//       </Offcanvas.Title>
//     </Offcanvas.Header>
//     <Offcanvas.Body>
//       <Nav className="justify-content-end flex-grow-1 pe-3  style-nav-links ms-auto">
//         <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//         <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
//         <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
//       </Nav>
//       <span className="navbar-text">
//         <div className="social-icon">
//           <a href="linkedin.com/in/william-lawrence-196511156/"><img src={navIcon1} alt="" /></a> 
        
//           {/* <a href="#"><img src={navIcon2} alt="" /></a>
//           <a href="#"><img src={navIcon3} alt="" /></a>  */}

//          </div>
//         <HashLink to='#connect'>
//           <button className="vvd"><span>Let’s Connect</span></button>
//         </HashLink>
//       </span>
//     </Offcanvas.Body>
//   </Navbar.Offcanvas>
// </Container>
// </Navbar> */}















  //Original............


}

export default NavBar;