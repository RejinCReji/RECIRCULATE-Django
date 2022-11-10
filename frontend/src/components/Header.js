import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MdOutlineSell } from 'react-icons/md';
function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <LinkContainer to="/">
            <Navbar.Brand>RECIRCULATE</Navbar.Brand>
          </LinkContainer>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fa-solid fa-cart-arrow-down"></i>
                  {'  '}Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/post">
                <Nav.Link>
                  <MdOutlineSell size={21} />
                  {'  '}
                  Sell
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            {/* <NavDropdown title="User Name" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#Settings">Settings</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </NavDropdown> */}
            <LinkContainer to="Login">
              <Nav.Link eventKey={2}>
                <i className="fa-regular fa-user "></i>
                {'  '}Login
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
