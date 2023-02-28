import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MdOutlineSell } from 'react-icons/md';
import { logout } from '../actions/userActions';
function Header() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
    console.log('logout');
  };
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
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="collasible-nav-dropdown">
                <LinkContainer to="profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="settings">
                  <NavDropdown.Item>Settings</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="Login">
                <Nav.Link eventKey={2}>
                  <i className="fa-regular fa-user "></i>
                  {'  '}Login
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
