import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import { useForm } from "react-hook-form";

const InventoryDetail = () => {
  const inventories = useInventory();
  const { inventoryId } = useParams();
  const selectedInventory = inventories.find(
    (inventory) => inventory._id === inventoryId
  );
  const [carQuantity, setCarQuantity] = useState(0);
  const quantityDecreaser = () => {
    if (carQuantity > 0) {
      setCarQuantity(carQuantity - 1);
    }
  };
  //Form submit functionalities
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setCarQuantity(data.quantity);
    console.log(data.quantity);
  };
  return (
    <div
      className="d-flex justify-content-between container border   w-75 p-3 text-start flex-lg-row flex-md-row flex-sm-column flex-column"
      style={{ marginTop: "100px" }}
    >
      <section className="">
        <img
          src={selectedInventory?.img}
          alt="inventoryImg"
          className="img-fluid mb-5"
        />
      </section>
      <section className="ms-5">
        <h2>{selectedInventory?.name}</h2>
        <p> {selectedInventory?.shortDescription}</p>
        <p>
          <b>Price: </b>${selectedInventory?.price}
        </p>
        <p>
          <b>Quantity:</b> {carQuantity}
        </p>
        <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column">
          <div
            className="me-3"
            style={{ marginTop: "36px", marginBottom: "30px" }}
          >
            <Button variant="success" onClick={quantityDecreaser}>
              Delivered
            </Button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Restock items</h3>
            <input type="number" {...register("quantity")} className="w-75" />
            <input type="submit" value="+" className="ms-2" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default InventoryDetail;
