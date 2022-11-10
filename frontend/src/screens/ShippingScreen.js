import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';
import products from '../products';

function ShippingScreen() {
  const [FullName, setFullName] = useState('');
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted');
    navigate('/payment');
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <Form onSubmit={submitHandler}>
        <Card className="p-3">
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Full Name"
              className="rounded border p-2 mb-3 "
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              required
              as="input"
              placeholder="10-digit mobile number"
              className="rounded border p-2 mb-3"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Address"
              className="rounded border p-2 mb-3 "
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Area / Village / Street / City / Town</Form.Label>
            <Form.Control
              type="text"
              className="rounded border p-2 mb-3 "
            ></Form.Control>
          </Form.Group>

          <div
            className="d-flex justify-content-between py-2"
            style={{ width: '25rem' }}
          >
            <Form.Group>
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                required
                type="input"
                className="rounded border p-2 "
                placeholder="6 digit [0-9] PIN Code"
                autoComplete="off"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>District</Form.Label>
              <Form.Control
                required
                as="select"
                className="rounded border px-4"
              >
                <option key="">Select</option>
                <option key="Kollam" value="Kollam">
                  Kollam
                </option>
                <option key="Trivandrum" value="Trivandrum">
                  Trivandrum
                </option>
                <option key="other" value="other">
                  other
                </option>
              </Form.Control>
            </Form.Group>
          </div>
          <Form.Check
            className="my-3 mx-auto"
            label="Make this my default address"
            type="checkbox"
          ></Form.Check>
          <Button type="submit">Add Address</Button>
        </Card>
      </Form>
    </FormContainer>
  );
}

export default ShippingScreen;
