import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <Link to='/home'>
                <img src="https://image.freepik.com/free-vector/error-404-concept-landing-page_52683-11840.jpg" alt="" />
            </Link>
        </div>
    );
};

export default Notfound;