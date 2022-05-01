import React, { useEffect, useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import { useForm } from "react-hook-form";

const InventoryDetail = () => {
  const inventories = useInventory();
  const { inventoryId } = useParams();
  const selectedInventory = inventories.find(
    (inventory) => inventory._id === inventoryId
  );
  const totalQuantity = selectedInventory?.quantity;
  console.log(selectedInventory);
  console.log(totalQuantity);
  const [carQuantity, setCarQuantity] = useState(totalQuantity);
  useEffect(() => {
    setCarQuantity(totalQuantity);
  }, [totalQuantity]);
  const quantityDecreaser = () => {
    if (carQuantity > 0) {
      setCarQuantity(carQuantity - 1);
      const remainingQuantity = carQuantity - 1;
      const data = { remainingQuantity };
      fetch(`http://localhost:5000/inventories/${inventoryId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  };
  //Form submit functionalities
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data.quantity > 0) setCarQuantity(data.quantity);
    console.log(data.quantity);
    reset();
  };

  return (
    <div
      className="d-flex justify-content-between container border   w-75 p-3 text-start flex-lg-row flex-md-row flex-sm-column flex-column"
      style={{ marginTop: "100px" }}
    >
      <section className="border p-2">
        <h2 className="mb-3">{selectedInventory?.name}</h2>
        <section className="position-relative ">
          <img
            src={selectedInventory?.img}
            alt="inventoryImg"
            className="w-100 mb-5"
          />
          <Badge
            bg="info position-absolute top-0 end-0 p-3 rounded-0"
            style={{ fontSize: "18px" }}
          >
            ${selectedInventory?.price}
          </Badge>
        </section>

        <p> {selectedInventory?.shortDescription}</p>
        <p>
          <b>Price: </b>${selectedInventory?.price}
        </p>
        <p>
          <b>Quantity:</b> {carQuantity}
        </p>
      </section>
      <section className="">
        <div className=" p-3">
          <div className="border border-dark border-3 mb-5">
            <h3 className="bg-dark text-light p-3">Available Quantity</h3>
            <h1 className="text-center py-4 text-info">{carQuantity}</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Want To Restock Items?</h3>
            <input
              type="number"
              {...register("quantity")}
              className="w-100 form-control my-3 p-3"
              placeholder="Enter amount to restock"
              reset
            />
            <input
              type="submit"
              value="Restock Items"
              className="w-100 p-3 btn btn-info  text-light fw-bold"
              style={{ fontSize: "18px" }}
            />
          </form>
          <div style={{ marginTop: "36px", marginBottom: "30px" }}>
            <Button
              variant="danger"
              onClick={quantityDecreaser}
              className="w-100 p-3 fw-bold"
              style={{ fontSize: "18px" }}
            >
              Delivered
            </Button>
            <Link to="/manageInventories">
              {" "}
              <Button
                variant="primary"
                className="w-100 p-3 fw-bold mt-5"
                style={{ fontSize: "18px" }}
              >
                Manage Inventory
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryDetail;
