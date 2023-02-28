import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

function RegisterScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password's do not match");
    } else {
      dispatch(register(name, email, password));
      console.log('submitted');
    }
  };

  return (
    <FormContainer>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <h1 className="text-center mt-5">SIGN UP</h1>
      {message && <Message variant="info">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="rounded p-3 mb-3"
            type="name"
            required
            placeholder="Enter your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
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
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            className="rounded p-3 mb-3"
            type="password"
            required
            placeholder="Enter your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
              to={redirect ? `/login?redirect=${redirect}` : '/login'}
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
