import React from "react";
import { Button, Table } from "react-bootstrap";
import useInventory from "../../hooks/useInventory";
import Inventory from "../Inventory/Inventory";

const ManageInventories = () => {
  const inventories = useInventory();
  let count = 0;
  return (
    <div style={{ marginTop: "100px" }} className="container">
      <h1>Manage Inventory</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Item Details</th>
            <th>Delete Item</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => (
            <tr>
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
                    {inventory.price}
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
                  stroke-width="2"
                  className="text-danger mt-5"
                  style={{ height: "30px", cursor: "pointer" }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
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
