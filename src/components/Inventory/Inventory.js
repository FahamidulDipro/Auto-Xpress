import React from "react";
import { Row } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";
import InventoryItem from "../InventoryItem/InventoryItem";

const Inventory = () => {
  const inventories = useInventory();
  return (
    <div className="container">
      <Row className="container my-5">
        {inventories.map((inventory) => (
          <InventoryItem
            key={inventory._id}
            inventory={inventory}
          ></InventoryItem>
        ))}
      </Row>
    </div>
  );
};

export default Inventory;
