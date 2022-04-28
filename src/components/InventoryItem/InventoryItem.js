import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const InventoryItem = ({ inventory }) => {
  const { _id, name, shortDescription, img, price, quantity, supplierName } =
    inventory;
  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <Col lg={4} className="g-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{shortDescription}</Card.Text>
          <p>
            <b>Price:</b> ${price}
          </p>
          <p>
            <b>Quantity:</b> {quantity}
          </p>
          <p>
            <b>Supplier Name:</b> {supplierName}
          </p>
          <Button
            variant="primary"
            className="me-3"
            onClick={() => handleUpdate(_id)}
          >
            Update
          </Button>
          <Button variant="success">Delivered</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InventoryItem;
