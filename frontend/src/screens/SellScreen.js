import React, { useContext, useState, useMemo } from 'react';
import { Button, Card, Form, Tab, Tabs } from 'react-bootstrap';
import products from '../products';
import FormContainer from '../components/FormContainer';
import UploadFile from '../utils/UploadFile';
import { Helmet } from 'react-helmet-async';
import UploadSteps from '../components/UploadSteps';
import { useNavigate } from 'react-router-dom';

function Sell() {
  const navigate = useNavigate();
  const detailsHandler = (e) => {
    navigate('/address');
    e.preventDefault();
    console.log('Details Uploaded');
  };
  return (
    <div>
      <FormContainer>
        <Helmet>
          <title>Sell</title>
        </Helmet>
        <UploadSteps step1 />
        <h2 className="text-center mt-1 mb-3">ADD YOUR PRODUCT</h2>
        <Form
          onSubmit={detailsHandler}
          variant="flush"
          encType="multipart/form-data"
        >
          <Card className="p-3">
            <Form.Group>
              <Form.Label>Name of the Book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name of the Book"
                className="rounded border p-2 mb-3 "
                list="bookName"
              ></Form.Control>
              <datalist id="bookName">
                {products.map((item) => (
                  <option key={item._id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </datalist>
            </Form.Group>
            <Form.Group>
              <Form.Label>Name of Author</Form.Label>
              <Form.Control
                as="input"
                placeholder="Name of Author"
                className="rounded border p-2 mb-3"
                list="authorName"
              ></Form.Control>
              <datalist id="authorName">
                {products.map((item) => (
                  <option key={item._id} value={item.category}>
                    {item.name}
                  </option>
                ))}
              </datalist>
            </Form.Group>

            <div className="d-flex justify-content-between ">
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  className="rounded border p-2 "
                  placeholder="Category"
                  autoComplete="off"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Quality</Form.Label>
                <Form.Control as="select" className="rounded border p-2">
                  <option key="">Select Quantity</option>
                  <option key="good" value={4.5}>
                    Good quality
                  </option>
                  <option key="medium" value={2.5}>
                    Medium quality
                  </option>
                  <option key="poor" value={1}>
                    Poor quality
                  </option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Orginal MRP ₹</Form.Label>
                <Form.Control
                  type="number"
                  className=" rounded border p-2"
                ></Form.Control>
              </Form.Group>
            </div>
            <div className="d-flex justify-content-between ">
              <Form.Group>
                <Form.Label>Select the Category</Form.Label>
                <Form.Control
                  as="select"
                  className="rounded border p-2 "
                  placeholder="Category"
                  autoComplete="off"
                >
                  {products.map((item) => (
                    <option key={item._id} value={item.category}>
                      {item.category}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Semester</Form.Label>
                <Form.Control as="select" className="rounded border p-2">
                  {products.map((item) => (
                    <option key={item._id} value={item.numReviews}>
                      {item.numReviews}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Syllabus Scheme</Form.Label>
                <Form.Control as="select" className="rounded border p-2">
                  {products.map((item) => (
                    <option key={item._id} value={item.numReviews}>
                      {item.rating}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                className="rounded border p-2"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Upload Images</Form.Label>
              <UploadFile />
            </Form.Group>

            <Button type="submit">NEXT</Button>
          </Card>
        </Form>
      </FormContainer>
    </div>
  );
}

export default Sell;
