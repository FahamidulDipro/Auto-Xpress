import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Testimonials = () => {
  return (
    <div className="container my-5 p-5">
      <h1 className="mt-5 text-uppercase">Our Testimonials</h1>
      <small className="mb-5 text-secondary">
        What Our Happy Clients say about us
      </small>

      <hr className="text-danger" style={{ height: "5px" }} />

      <Row>
        <Col lg={4} className="mt-5">
          <Card style={{ width: "18rem" }} className="shadow-lg border-0">
            <Card.Img
              variant="top"
              src="http://demo.solwininfotech.com/wordpress/justica/wp-content/uploads/2016/07/Attorneys-5.png"
              alt="userImg"
            />
            <Card.Body className="p-0">
              <Card.Title className="text-light fw-bold bg-danger p-3">
                Matthew Gregory
              </Card.Title>
              <Card.Text className="p-2 text-start">
                The Auto Xpress comes equipped with the most standard safety and
                security features in the industry.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="mt-5">
          <Card style={{ width: "18rem" }} className="shadow-lg border-0">
            <Card.Img
              variant="top"
              src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/2017/01/01-5-430x450.jpg"
            />
            <Card.Body className="p-0">
              <Card.Title className="text-light fw-bold bg-danger p-3">
                Cailyn Elle
              </Card.Title>
              <Card.Text className="p-2 text-start">
                More standard safety and security features than any vehicle in
                the industry
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="mt-5 ">
          <Card style={{ width: "18rem" }} className="shadow-lg border-0">
            <Card.Img
              variant="top"
              src="https://www.ampericon.com/wp-content/uploads/2021/02/team-1.jpg"
            />
            <Card.Body className="p-0">
              <Card.Title className="text-light fw-bold bg-danger p-3">
                Tyler Clark
              </Card.Title>
              <Card.Text className="p-2 text-start">
                The Auto Xpress E-Shop Program now delivers the complete
                dealership experience online, from vehicle inventory to finance
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;
