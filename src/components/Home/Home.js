import React from "react";
import Footer from "../Footer/Footer";
import Inventory from "../Inventory/Inventory";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Slider></Slider>
      <Inventory></Inventory>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
