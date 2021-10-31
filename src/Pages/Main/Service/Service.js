import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, description, img } = service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text> {description}</Card.Text>
                        <Link to={`/servicedetails/${_id}`}><Button>Details</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;