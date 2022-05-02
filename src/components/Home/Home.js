import React from "react";
import Footer from "../Footer/Footer";
import Inventory from "../Inventory/Inventory";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Slider></Slider>
      <Inventory></Inventory>
      <Footer></Footer>
    </div>
  );
};

export default Home;
