import React, { useEffect, useState } from 'react';
import {
  Col,
  ListGroup,
  Row,
  Image,
  Card,
  Badge,
  Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import products from '../products';
import { listProductDetails } from '../actions/productActions';

function ProductScreen({ match }) {
  const params = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  // const {loading , error, product} = productDetails
  //commented above due no integration
  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, []);

  const product = products.find((x) => x._id === params.id); // replace props.match.params and when backend is not there

  // useEffect(() => {
  //   async function fetchProduct() {
  //     const { data } = await axios.get(`/api/product/${params.id}`);
  //     setProduct(data);
  //   }
  //   fetchProduct();
  // }, []);
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    console.log('ADDED TO CART :', params.id);
    navigate(`/cart/${product._id}/?qty=${qty}`);
  };
  return (
    <div className="mt-3">
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <h3>Real Content</h3>
      )} */}
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
                          className="px-3"
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
