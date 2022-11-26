import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import FormContainer from '../components/FormContainer';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitted');
  };
  return (
    <FormContainer>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1 className="text-center mt-5">SIGN UP</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            className="rounded p-3 mb-3"
            type="email"
            required
            placeholder="Enter your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="rounded p-3 mb-3"
            type="password"
            required
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            className="rounded p-3 mb-3"
            type="password"
            required
            placeholder="Enter your Password"
            value={password}
          ></Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-between mx-3 mt-3">
          <Form.Check label="Remember me" type="checkbox"></Form.Check>
        </div>
        <div className="d-grid gap-10">
          <Button className="my-3 rounded" type="submit" variant="success">
            Sign Up
          </Button>
        </div>

        <div className="text-center">
          <p>or sign up with:</p>

          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: '40%' }}
          >
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>
            {/* <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fa-brands fa-apple"></i>
            </button> */}
            {/* logo to be edited*/}
          </div>
          <Form.Group className="d-flex justify-content-center">
            <p>Already a user</p>

            <Link
              className="px-2"
              style={{ textDecoration: 'none' }}
              to="/login"
            >
              Log in?
            </Link>
          </Form.Group>
        </div>
      </Form>
    </FormContainer>
  );
}

export default RegisterScreen;
