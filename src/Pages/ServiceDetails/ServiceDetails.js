import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState();

    // console.log(service);

    useEffect(() => {
        fetch(`https://ghostly-demon-72447.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    // console.log(service);

    // const { name, description, longDescription, price, img } = service;
    return (
        <div>

            <div>

                <div>
                    <img src={service?.img} alt="" />
                    <h3>{service?.name}</h3>
                    <p>{service?.description}</p>
                    <p>{service?.longDescription}</p>
                    <br />
                    <h2>tk- {service?.price}</h2>
                    <Link to='/orderform'><Button>Booking</Button></Link>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;