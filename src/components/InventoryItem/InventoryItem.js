import React from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
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
      <Card
        style={{ width: "18rem" }}
        className="border-0 shadow-lg position-relative"
      >
        <Card.Img variant="top" src={img} />
        <Badge
          bg="info position-absolute top-0 start-0  p-3 rounded-0"
          style={{ fontSize: "18px" }}
        >
          ${price}
        </Badge>
        <Card.Title className="text-light fw-bold bg-danger p-3">
          {name}
        </Card.Title>
        <Card.Body className="text-start">
          <div className="">
            <p className="me-2">
              <b>Available Quantity:</b> {quantity}
            </p>
            <p>
              <b>Supplier Name:</b> {supplierName}
            </p>
          </div>
          <Card.Text>{shortDescription}</Card.Text>

          <Button
            variant="outline-danger fw-bold"
            className="me-3"
            onClick={() => handleUpdate(_id)}
          >
            Update
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InventoryItem;
