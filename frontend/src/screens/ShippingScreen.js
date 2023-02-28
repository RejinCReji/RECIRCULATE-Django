import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../actions/cartActions';
import products from '../products';

function ShippingScreen() {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [place, setPlace] = useState(shippingAddress.place);
  const [contactNum, setContactNum] = useState(shippingAddress.contactNum);
  const [address, setAddress] = useState(shippingAddress.address);
  const [pincode, setPincode] = useState(shippingAddress.pincode);
  const [district, setDistrict] = useState(shippingAddress.district);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        fullName,
        place,
        contactNum,
        address,
        pincode,
        district,
      })
    );
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
              value={fullName ? fullName : ''}
              onChange={(e) => setFullName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="10-digit mobile number"
              className="rounded border p-2 mb-3"
              value={contactNum ? contactNum : ''}
              onChange={(e) => setContactNum(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Address"
              className="rounded border p-2 mb-3 "
              value={address ? address : ''}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Area / Village / Street / City / Town</Form.Label>
            <Form.Control
              type="text"
              className="rounded border p-2 mb-3 "
              placeholder="Area / Village / Street / City / Town"
              value={place ? place : ''}
              onChange={(e) => setPlace(e.target.value)}
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
                type="number"
                className="rounded border p-2 "
                placeholder="6 digit [0-9] PIN Code"
                value={pincode ? pincode : ''}
                onChange={(e) => setPincode(e.target.value)}
                autoComplete="off"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>District</Form.Label>
              <Form.Control
                required
                as="select"
                className="rounded border px-4"
                value={district ? district : ''}
                onChange={(e) => setDistrict(e.target.value)}
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
                onChange={(e) => setDistrict(e.target.value)}
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
