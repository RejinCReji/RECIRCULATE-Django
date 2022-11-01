import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Col, Row } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';

function HomeScreen() {
  return (
    <div>
      <Helmet>
        <title>RECIRCULATE</title>
      </Helmet>
      <h1>Featured Items</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
