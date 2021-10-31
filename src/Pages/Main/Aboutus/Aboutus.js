import React from 'react';
import './Aboutus.css'

const Aboutus = () => {
    return (
        <div className='about'>
            <div className='img-part'>
                <img src="https://i.postimg.cc/tTzY1zWT/1.jpg" alt="" />
            </div>
            <div className='text-part'>
                <h3>Travel vai</h3>
                <p>Travel vai is a tourist guid and tour maker company. we always try to give priority to our customer to explore his/her journey. we can simply say that our service makes your journey more delighted.</p>
                <button className='btn btn-sm btn-secondary'>contract us</button>
            </div>
        </div>
    );
};

export default Aboutus;