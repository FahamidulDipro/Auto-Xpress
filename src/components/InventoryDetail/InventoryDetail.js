import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useInventory from "../../hooks/useInventory";

const InventoryDetail = () => {
  const inventories = useInventory();
  const { inventoryId } = useParams();
  const selectedInventory = inventories.find(
    (inventory) => inventory._id === inventoryId
  );
  return (
    <div className="d-flex justify-content-between container border mt-5 w-75 p-3 text-start">
      <section className="">
        <img
          src={selectedInventory?.img}
          alt="inventoryImg"
          className="img-fluid"
        />
      </section>
      <section className="ms-5">
        <h2>{selectedInventory?.name}</h2>
        <p> {selectedInventory?.shortDescription}</p>
      </section>
    </div>
  );
};

export default InventoryDetail;
