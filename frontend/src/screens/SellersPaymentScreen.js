import React, { useState } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import FormContainer from '../components/FormContainer';
import UploadSteps from '../components/UploadSteps';
function SellersPaymentScreen() {
  const navigate = useNavigate();
  const [paymentMethod, SetPaymentMethod] = useState('Paytm');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted');
    navigate('/');
  };
  return (
    <FormContainer>
      <UploadSteps step1 step2 step3 />

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

export default SellersPaymentScreen;
