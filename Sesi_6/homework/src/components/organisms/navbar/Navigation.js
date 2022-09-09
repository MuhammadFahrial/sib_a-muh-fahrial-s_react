import React from "react";
// import { NavLink } from "react-router-dom";
// import CreateMeetup from "../../atoms/link/CreateMeetup";
// import Explore from "../../atoms/link/Explore";
// import Login from "../../atoms/link/Login";
// import Qtemu from "../../atoms/link/Qtemu";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid">
              <Nav.Link as={Link} to="/" className="nav-link text-first">
                <b>QTemu</b>
              </Nav.Link>
              <Nav.Link as={Link} to="/create-meetup" className="nav-link">
                Create Meetup
              </Nav.Link>
              <Nav.Link as={Link} to="/explore" className="nav-link">
                Explore
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="login-right">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
