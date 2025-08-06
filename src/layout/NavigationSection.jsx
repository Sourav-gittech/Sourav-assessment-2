import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";

const NavigationSection = () => {
  return (
    <Navbar expand="lg" fixed='top' className="bg-body-tertiary py-3">
      <Container>
        <Navbar.Brand href="#home"><FaGithub className='icon' /> GitHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationSection