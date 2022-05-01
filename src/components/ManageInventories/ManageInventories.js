import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useInventory from '../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';

const ManageInventories = () => {
    const inventories = useInventory();
    let count = 0;
    return (
        <div style={{marginTop:'100px'}} className="container">
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
      {
          inventories.map(inventory=> <tr>
            <td>{count = count+1}</td>
            <td>{inventory.name}</td>
            <td><div className='text-start'>{inventory.shortDescription}
            <p><b>Quantity: </b>{inventory.quantity}</p>
            <p><b>Price: </b>{inventory.price}</p>
            <p><b>Supplier Name: </b>{inventory.supplierName}</p>
            </div></td>
            <td><Button variant='danger'>Delete</Button></td>
          </tr>)
      }
   
   
   
  </tbody>
</Table>
        </div>
    );
};

export default ManageInventories;