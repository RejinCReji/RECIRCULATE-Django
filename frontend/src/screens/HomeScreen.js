import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Col, Row } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';
import Loader from '../components/Loader';
import axios from 'axios';
import { listProducts } from '../actions/productActions';
import Message from '../components/Message';

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  // const { error, loading, products } = productList;
  // // above one  is neccessary but commented due to no backend
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(listProducts());

    //   async function fetchProducts() {
    //     const { data } = await axios.get('http://127.0.0.1:8000/api/products/');
    //     setProducts(data);
    //   }
    //   fetchProducts();
  }, [dispatch]);
  return (
    <div>
      <Helmet>
        <title>RECIRCULATE</title>
      </Helmet>

      <h1>Featured Items</h1>
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <h3>Real Content</h3>
      )} */}
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
