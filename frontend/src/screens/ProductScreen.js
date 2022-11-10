import React, { useState } from 'react';
import {
  Col,
  ListGroup,
  Row,
  Image,
  Card,
  Badge,
  Button,
} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products';

function ProductScreen({ match }) {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const params = useParams();
  const product = products.find((x) => x._id === params.id);
  const addToCartHandler = () => {
    console.log('ADDED TO CART :', params.id);
    navigate(`/cart/${product._id}/?qty=${qty}`);
  };
  return (
    <div className="mt-3">
      <Row>
        <Col md={6}>
          <Image className="img-fluid" src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <h3>{product.name}</h3>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                color={'#1a1a1a'}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : ₹{product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description : <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col className="label-wrapper">Price:</Col>
                    <Col className="label-wrapper">
                      <strong>₹{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col className="label-wrapper">Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge pill bg="success">
                          In Stock
                        </Badge>
                      ) : (
                        <Badge pill bg="danger">
                          Unavailable
                        </Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col className="my-auto">Qty :</Col>
                      <Col className="my-1">
                        <Form.Select
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <div className="d-grid gap-2">
                    <Button
                      onClick={addToCartHandler}
                      variant="info"
                      disabled={product.countInStock === 0}
                      type="button"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
