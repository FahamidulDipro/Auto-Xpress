import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { AiFillCar, AiOutlineMessage, AiOutlineTrophy, AiOutlineUser } from "react-icons/ai";
const Counter = () => {
    return (
        <div className='container shadow-lg my-5 p-3'>
            <h1 className='mt-5'>LATEST UPDATES</h1>
            <small className='mb-5 text-secondary'>Read our latest UPDATES</small>
            <Row className='my-5'>
                <Col lg={3}>
                    <h3 className='mb-5'>VEHICLES IN STOCK</h3>
                    <AiFillCar style={{fontSize:'50px'}} className='text-danger'></AiFillCar>
                <h1 className='mt-3'><CountUp end={1000}></CountUp></h1>
                </Col>
                <Col lg={3}>
                <h3 className='mb-5'>DEALER REVIEWS</h3>
                <AiOutlineMessage style={{fontSize:'50px'}} className=' text-danger'></AiOutlineMessage>
                <h1 className='mt-3'><CountUp end={5000}></CountUp></h1>
                </Col>
                <Col lg={3}>
                <h3 className='mb-5'>HAPPY CUSTOMERS</h3>
                <AiOutlineUser style={{fontSize:'50px'}} className='text-danger'></AiOutlineUser>
                <h1 className='mt-3'><CountUp end={3000}></CountUp></h1>
                </Col>
                <Col lg={3}>
                <h3 className='mb-5'>AWARDS</h3>
                
                <AiOutlineTrophy style={{fontSize:'50px'}} className='text-danger'></AiOutlineTrophy>
                <h1 className='mt-3'><CountUp end={2000}></CountUp></h1>
                </Col>
            </Row>
            
        </div>
    );
};

export default Counter;