import React from "react";
import { Outlet } from "react-router-dom";
import Logo from '../images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = ({children}) => {
  return(
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src = {Logo} alt="Logo" style={{ width: 40,height:40}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Graph">Graph</Nav.Link>
            <Nav.Link href="Simple">Simple</Nav.Link>
            <Nav.Link href="Unit">Unit</Nav.Link>
            <Nav.Link href="Scientific">Scientific</Nav.Link>
            <Nav.Link href="Tempreture">Tempreture</Nav.Link>
            <Nav.Link href="Programming">Programming</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  )
}


export default Layout;
