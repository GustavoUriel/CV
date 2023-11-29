import React from "react";
import "css/NavBar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import WidgetUser from "components/WidgetUser.js";
import logo from "img/pesos.png";
import InsertImage from "components/InsertImage";

function NavBar() {
  const [logoSize, setLogoSize] = React.useState(80);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        className="Nav-Style navbar navbar-dark navbar-expand-sm fixed-top"
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/AboutMe">
              About me
            </Nav.Link>
            <Nav.Link as={Link} to="/Introduction">
              Data Analysis
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
export default NavBar;
