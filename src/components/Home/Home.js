import React from "react";
import Inventory from "../Inventory/Inventory";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Slider></Slider>
      <Inventory></Inventory>
    </div>
  );
};

export default Home;
