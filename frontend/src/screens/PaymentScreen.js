import React, { useState } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';
import { savePaymentMethod } from '../actions/cartActions';
function PaymentScreen() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();

  if (!shippingAddress.address) {
    navigate('/shipping');
  }

  const [paymentMethod, SetPaymentMethod] = useState('Paytm');
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    console.log('Submitted');
    navigate('/place-order');
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />

      <Form onSubmit={submitHandler}>
        <Card className="p-2">
          <Form.Group>
            <Form.Label as="legend">Select Payment Method</Form.Label>
            <Col className="mx-3 my-3">
              <Form.Check
                type="radio"
                label="Paytm or Credit Card"
                id="Paytm"
                name="paymentMethod"
                checked
                onChange={(e) => {
                  SetPaymentMethod(e.target.value);
                }}
              ></Form.Check>
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            Continue
          </Button>
        </Card>
      </Form>
    </FormContainer>
  );
}

export default PaymentScreen;
