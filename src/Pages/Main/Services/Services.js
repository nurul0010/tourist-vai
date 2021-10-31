import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('https://ghostly-demon-72447.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='container' id='services'>
            <h2 className='my-4'>Lets explore our services</h2>
            <Row xs={1} md={2} className="g-4">


                {
                    services?.map(service => <Service
                        key={service?._id}
                        service={service}
                    ></Service>)
                }

            </Row>

        </div>
    );
};

export default Services;