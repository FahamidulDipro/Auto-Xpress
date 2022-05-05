import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


const ManageInventories = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://polar-inlet-04132.herokuapp.com/inventories")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  const deleteHandler = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to remove?");
    if (confirmDelete) {
      fetch(`https://polar-inlet-04132.herokuapp.com/deleteFromInventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          const remainingItems = inventories.filter(
            (item) => item._id !== id
          );
          setInventories(remainingItems);
          console.log(result);
        });
    }
  };
  let count = 0;
  return (
    <div style={{ marginTop: "100px" }} className="container">
      <div className="d-flex justify-content-between">
        <h1 className="mb-5">Manage Inventory</h1>
        <div>
          <Link to="/additems">
            <Button
              variant="info fw-bold text-light"
              style={{ fontSize: "20px" }}
            >
              Add Items &nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                style={{ height: "30px", cursor: "pointer" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </Button>
          </Link>{" "}
        </div>
      </div>

      <Table striped bordered hover>
        <thead style={{ fontSize: "20px" }}>
          <tr className="bg-dark text-light">
            <th>Serial No.</th>
            <th>Item Name</th>
            <th>Item Details</th>
            <th>Delete Item</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => (
            <tr key={inventory._id}>
              <td>{(count = count + 1)}</td>
              <td>{inventory.name}</td>
              <td>
                <div className="text-start">
                  {inventory.shortDescription}
                  <p>
                    <b>Quantity: </b>
                    {inventory.quantity}
                  </p>
                  <p>
                    <b>Price: </b>
                    ${inventory.price}
                  </p>
                  <p>
                    <b>Supplier Name: </b>
                    {inventory.supplierName}
                  </p>
                </div>
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-danger mt-5"
                  style={{ height: "30px", cursor: "pointer" }}
                  onClick={() => {
                    deleteHandler(inventory._id);
                  }}
                >
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventories;
