import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

function Product({ product }) {
  return (
    <Card
      className="mx-auto my-2 p-3 rounded product-card"
      style={{ width: '17rem' }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              color={'#1a1a1a'}
              text={`${product.numReviews} Reviews`}
            />
          </div>
        </Card.Text>

        <Card.Title className="card-price" as="h3">
          ₹{product.price}
        </Card.Title>
        {product.countInStock === 0 ? (
          <Button className="rounded" variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          <Button
            className="btn btn-primary rounded btn-card"
            variant="primary"
          >
            View Sellers
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;
