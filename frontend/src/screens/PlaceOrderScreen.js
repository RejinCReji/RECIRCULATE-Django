import React from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cartItems from '../cartItems';
import CheckoutSteps from '../components/CheckoutSteps';
import Message from '../components/Message';

function PlaceOrderScreen() {
  const cart = useSelector((state) => state.cart);
  // cart.itemsPrice =cart.cartItems.reduce((acc,item)=> acc+ item.price*item.qty,0).toFixed(2)
  // cart.shippingPrice = (cart.itemsPrice > 500 ? 0 : 100).toFixed(2)
  // cart.taxPrice = Number((0.082) * cart.itemsPrice).toFixed(2)
  // cart.totalPrice = (Number(cart.ItemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)
  const price = 10809.73; // sample price
  const placeOrder = () => {
    console.log('Place Order');
  };
  return (
    <Container>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <legend>SHIPPING</legend>
              <p className="mx-2">
                {' '}
                <strong>Shipping: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.place}{' '}
                {cart.shippingAddress.pincode}, {cart.shippingAddress.district}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <legend>PAYMENT METHOD</legend>
              <p className="mx-2">
                {' '}
                <strong>Method: </strong>
                {cart.paymentMethod}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <legend>ORDER ITMES</legend>
              {cartItems.length === 0 ? (
                <Message>
                  Your Cart is Empty !
                  <Link
                    className="mx-3"
                    style={{ textDecoration: 'none' }}
                    to="/"
                  >
                    {' '}
                    Go Shopping{' '}
                  </Link>
                </Message>
              ) : (
                <ListGroup variant="flush">
                  {cartItems.map((item) => (
                    <ListGroup.Item className="my-1" key={item._id}>
                      <Row className="align-items-center">
                        <Col md={1}>
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={`/product/${item._id}`}
                          >
                            <Image
                              src={item.image}
                              alt={item.image}
                              fluid
                              rounded
                            />
                          </Link>
                        </Col>
                        <Col>
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={`/product/${item._id}`}
                          >
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} <span>&#215;</span> ₹{item.price} = ₹
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card className="p-2">
            <ListGroup variant="flush">
              <ListGroup.Item className="text-center">
                <legend>Order Summary</legend>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Item: </Col>
                  <Col>₹{price}</Col>
                  {/* <Col>₹{cart.ItemsPrice}</Col> */}
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping: </Col>
                  <Col>₹{0.1 * price}</Col>
                  {/* <Col>₹{cart.shippingPrice}</Col> */}
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax: </Col>
                  <Col>₹{0.1 * price}</Col>
                  {/* <Col>₹{cart.taxPrice}</Col> */}
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total Price: </Col>
                  <Col>₹{1.2 * price}</Col>
                  {/* <Col>₹{cart.taxPrice}</Col> */}
                </Row>
              </ListGroup.Item>

              <Button
                type="button"
                //   disabled={cart.cartItems===0}
                onClick={placeOrder}
                className="my-3"
              >
                Place Order
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PlaceOrderScreen;
