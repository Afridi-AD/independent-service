import React from 'react';
import heart from '../../images/heart.jpg'
import heart3 from '../../images/heart3.png'

const Banner = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                <div className='mb-5 mt-4 img-fluid '>
            <img src={heart3} alt="" />
            </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;