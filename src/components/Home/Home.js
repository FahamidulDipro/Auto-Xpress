import React from "react";
import Counter from "../Counter/Counter";
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
      <Counter></Counter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
