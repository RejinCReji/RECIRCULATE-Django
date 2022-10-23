import React from 'react';
import {
  Col,
  ListGroup,
  Row,
  Image,
  Card,
  Badge,
  Button,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products';

function ProductScreen({ match }) {
  const params = useParams();
  const product = products.find((x) => x._id === params.id);
  return (
    <div className="mt-3">
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
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
                <ListGroup.Item>
                  {product.countInStock > 0 && (
                    <div className="d-grid gap-2">
                      <Button variant="info" type="button">
                        Add to Cart
                      </Button>
                    </div>
                  )}
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
