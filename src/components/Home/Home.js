import React from 'react';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div   style={{ marginTop: "100px" }}>
            <h1>Home sweet Home</h1>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;