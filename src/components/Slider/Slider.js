import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel style={{ marginTop: "-50px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.hdqwalls.com/download/ferrari-458-italia-4k-car-2v-1600x900.jpg"
          alt="First slide"
          style={{ height: "100vh" }}
        />
        <Carousel.Caption>
          <h3 style={{ fontSize: "50px", color: "red" }} className="fw-bold">
            ALL BRANDS
          </h3>
          <p className="text-info" style={{ fontSize: "20px" }}>
            We offer wide range of brands
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperbat.com/img/325694-black-car-wallpaper-top-free-black-car-background.jpg"
          alt="Second slide"
          style={{ height: "100vh" }}
        />

        <Carousel.Caption>
          <h3 style={{ fontSize: "50px", color: "red" }} className="fw-bold">
            DEALERSHIP & FREE SUPPORT
          </h3>
          <p className="text-info" style={{ fontSize: "20px" }}>
            Most enticing, creative, modern and multipurpose auto dealer
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.hdqwalls.com/download/brabus-800-widestar-2019-rear-ht-1600x900.jpg"
          alt="Third slide"
          style={{ height: "100vh" }}
        />

        <Carousel.Caption>
          <h3 style={{ fontSize: "50px", color: "red" }} className="fw-bold">
            AFFORDABLE
          </h3>
          <p className="text-info" style={{ fontSize: "20px" }}>
            We are trusted by thousands
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
