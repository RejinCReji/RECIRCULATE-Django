import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import {
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Image,
} from 'react-bootstrap';
// need to change item._id to item.product bcz of keyword in reducer
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import cartItems from '../cartItems';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../actions/cartActions';
function CartScreen() {
  const params = useParams();
  const { search } = useLocation();
  const productId = params.id;

  const qty = new URLSearchParams(search).get('qty');
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;

  const navigate = useNavigate();
  const updateCartHandler = (id, updatedQty) => {
    // dispatch(addToCart(id, updatedQty));
    console.log('Item Updated : ', updatedQty);
  };
  const removeItemHandler = (id) => {
    // dispatch(removeFromCart(id));
    console.log('Item Deleted :', id);
  };
  const checkOutHandler = () => {
    navigate('/login?redirect=shipping');
  };
  console.log('qty :', qty);
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is Empty !
            <Link className="mx-3" style={{ textDecoration: 'none' }} to="/">
              {' '}
              Go Shopping{' '}
            </Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => {
              return (
                <ListGroup.Item
                  className="border border-secondary rounded my-3"
                  key={item._id} // need to change to item.product bcz of keyword in reducer
                >
                  <Row className="align-items-center">
                    <Col md={2}>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/product/${item._id}`}
                      >
                        <Image
                          src={item.image}
                          alt={item.image}
                          className="img-fluid rounded img-thumbnail"
                        />
                      </Link>
                    </Col>
                    <Col md={3}>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/product/${item._id}`}
                      >
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={2}>₹{item.price}</Col>
                    <Col md={4}>
                      <div
                        className="d-flex justify-content-between py-2"
                        style={{ width: '15rem' }}
                      >
                        <Button
                          onClick={() =>
                            updateCartHandler(item._id, item.qty - 1)
                          }
                          variant="light"
                          disabled={item.quantity === 1}
                          className="Icon-Quantity"
                        >
                          <i className="fas fa-minus-circle"></i>
                        </Button>
                        <span className="my-auto">
                          Qty: <strong>{item.qty}</strong>
                        </span>
                        <Button
                          onClick={() => updateCartHandler(item, item.qty + 1)}
                          variant="light"
                          disabled={item.countInStock === item.qty}
                          className="Icon-Quantity"
                        >
                          <i className="fas fa-plus-circle"></i>
                        </Button>
                        <Button
                          onClick={() => removeItemHandler(item._id)}
                          variant="light"
                          className="Icon-Trash"
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>
                  Subtotal({cartItems.reduce((a, c) => a + c.qty, 0)} items) : ₹
                  {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid gap-2">
                  <Button
                    onClick={checkOutHandler}
                    variant="primary"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
export default CartScreen;
