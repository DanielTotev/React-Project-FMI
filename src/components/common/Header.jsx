import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" className="Header">
      <Container>
        <Navbar.Brand href="#home">Rent-A-Car</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/cars" className="nav-link">
              Cars
            </Link>
            <Link to="/customers" className="nav-link">
              Customers
            </Link>
          </Nav>
          <Nav>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
