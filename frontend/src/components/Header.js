import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">RECIRCULATE</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#cart">
                <i class="fa-solid fa-cart-arrow-down"></i>
                {'  '}Cart
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            {/* <NavDropdown title="User Name" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#Settings">Settings</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link eventKey={2} href="#Login">
              <i class="fa-regular fa-user "></i>
              {'  '}Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
