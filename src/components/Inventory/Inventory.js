import React from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import InventoryItem from "../InventoryItem/InventoryItem";

const Inventory = () => {
  const inventories = useInventory();
  return (
    <div className="container mt-5">
      <h1>Featured Inventory</h1>
      <Row className="container my-5">
        {inventories.map((inventory) => (
          <InventoryItem
            key={inventory._id}
            inventory={inventory}
          ></InventoryItem>
        ))}
      </Row>
      <Link to="/manageInventories">
        {" "}
        <Button
          variant="primary"
          className=" p-3 fw-bold my-5"
          style={{ fontSize: "18px" }}
        >
          Manage Inventory
        </Button>
      </Link>
    </div>
  );
};

export default Inventory;
