import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useInventory from "../../hooks/useInventory";
import InventoryItem from "../InventoryItem/InventoryItem";
import Loading from "../Loading/Loading";
import "./Inventory.css";
const Inventory = () => {

 
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 6;
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/inventories?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, [page, size]);

  useEffect(() => {
    fetch("http://localhost:5000/itemCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 6);
        setPageCount(pages);
      });
  }, []);
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
      <div className="pagination  d-flex justify-content-center">
        {[...Array(pageCount).keys()].map((num) => (
          <Button
            keys={num}
            variant="outline-info me-3"
            className={page === num ? "selected" : ""}
            onClick={() => setPage(num)}
          >
            {num + 1}
          </Button>
        ))}
      </div>
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
